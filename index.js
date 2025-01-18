const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

// Configure multer for file upload
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const uploadDir = "uploads/";
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
		fileSize: 5 * 1024 * 1024, // 5MB limit
	},
});

// File upload endpoint
app.post("/upload", upload.single("file"), (req, res) => {
	if (!req.file) {
		return res.status(400).json({ error: "No file uploaded" });
	}

	res.json({
		message: "File uploaded successfully",
		filename: req.file.filename,
		originalName: req.file.originalname,
		size: req.file.size,
	});
});

// Get list of all files
app.get("/files", (req, res) => {
	const uploadDir = "uploads/";
	fs.readdir(uploadDir, (err, files) => {
		if (err) {
			return res.status(500).json({ error: "Error reading files" });
		}
		res.json(files);
	});
});

// Get image by filename
app.get("/image/:filename", (req, res) => {
	const filename = req.params.filename;
	const imagePath = path.join(__dirname, "uploads", filename);

	// Check if file exists
	if (!fs.existsSync(imagePath)) {
		return res.status(404).json({ error: "Image not found" });
	}

	// Send the image file
	res.sendFile(imagePath);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
