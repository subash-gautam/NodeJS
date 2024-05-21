const fs = require("fs");
const path = require("path");
const crud = path.join(__dirname, "crud");
filePath = `${crud}/text.txt`;

// creating file
fs.writeFileSync(filePath, "this is initile content in file.");

// reading the file
fs.readFile(filePath, "utf-8", (err, data) => {
    if (!err) console.log("data read is " + data);
});

// Rename the file
fs.rename(filePath, "crud/textupd.txt", (err) => {
    if (!err) console.log("File name is updated successfully.");
});

// Delete the file
fs.unlinkSync("crud/textupd.txt");
