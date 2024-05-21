const { log } = require("console");
const fs = require("fs");
const path = require("path");
const rasta = path.join(__dirname); //for directory onlt
const rastaFile = path.join(__dirname, "files"); // directory with file

console.log(rastaFile);

// create a file.
fs.writeFileSync(
    rasta + `/file.txt`,
    `This is the file content. 17 is my fav number.`
);

// create files using loop
for (i = 0; i < 5; i++) {
    fs.writeFileSync(rasta + `/file${i + 1}.txt`, `${i + 1} is my fav number.`);
}

// read all files names...
fs.readdir(rasta, (err, theFiles) => {
    console.log(theFiles);
    theFiles.forEach((file) => {
        console.log("File name : " + file);
    });
});

// read file name
fs.readdir(rasta, (err, files) => {
    console.log(files[5]);
});
