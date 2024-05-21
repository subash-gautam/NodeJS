const express = require("express");
const path = require("path");
const data = require("./3data");

const app = express();

// const publicPath = path.join(__dirname, "9public");
// app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.json(data); // Send the data as JSON
    console.log(data); // Log the data to the console
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
