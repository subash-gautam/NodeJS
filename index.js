require("dotenv").config();
const express = require("express");
const multer = require("multer");
const { Pool } = require("pg");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Configure PostgreSQL connection using environment variables
const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT || 5432,
});

// Configure multer for file upload
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const uploadDir = process.env.UPLOAD_DIR || "uploads/";
		if (!fs.existsSync(uploadDir)) {
			fs.mkdirSync(uploadDir);
		}
		cb(null, uploadDir);
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + "-" + file.originalname);
	},
});

const upload = multer({
	storage: storage,
	limits: {
		fileSize: parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024, // Default 5MB
	},
});

// Create files table in PostgreSQL
async function initDatabase() {
	const createTableQuery = `
        CREATE TABLE IF NOT EXISTS files (
            id SERIAL PRIMARY KEY,
            filename VARCHAR(255) NOT NULL,
            original_name VARCHAR(255) NOT NULL,
            description TEXT,
            mime_type VARCHAR(100),
            size INTEGER,
            upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

	try {
		await pool.query(createTableQuery);
		console.log("Database initialized successfully");
	} catch (err) {
		console.error("Error initializing database:", err);
	}
}

// Initialize database on startup
initDatabase();

// File upload endpoint with description
app.post("/upload", upload.single("file"), async (req, res) => {
	if (!req.file) {
		return res.status(400).json({ error: "No file uploaded" });
	}

	const description = req.body.description || "";

	try {
		const query = `
            INSERT INTO files (filename, original_name, description, mime_type, size)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id;
        `;

		const values = [
			req.file.filename,
			req.file.originalname,
			description,
			req.file.mimetype,
			req.file.size,
		];

		const result = await pool.query(query, values);

		res.json({
			message: "File uploaded successfully",
			fileId: result.rows[0].id,
			filename: req.file.filename,
			description: description,
		});
	} catch (err) {
		console.error("Error saving file metadata:", err);
		res.status(500).json({ error: "Error uploading file" });
	}
});

// Rest of the endpoints remain the same...
app.get("/files", async (req, res) => {
	try {
		const result = await pool.query(
			"SELECT * FROM files ORDER BY upload_date DESC",
		);
		res.json(result.rows);
	} catch (err) {
		console.error("Error retrieving files:", err);
		res.status(500).json({ error: "Error retrieving files" });
	}
});

app.get("/files/:id", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM files WHERE id = $1", [
			req.params.id,
		]);
		if (result.rows.length === 0) {
			return res.status(404).json({ error: "File not found" });
		}
		res.json(result.rows[0]);
	} catch (err) {
		console.error("Error retrieving file:", err);
		res.status(500).json({ error: "Error retrieving file" });
	}
});

app.get("/image/:filename", async (req, res) => {
	const filename = req.params.filename;
	const uploadDir = process.env.UPLOAD_DIR || "uploads/";
	const imagePath = path.join(__dirname, uploadDir, filename);

	if (!fs.existsSync(imagePath)) {
		return res.status(404).json({ error: "Image not found" });
	}

	res.sendFile(imagePath);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
