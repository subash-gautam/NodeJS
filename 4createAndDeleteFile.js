const fs = require("fs");
// import fs from "fs";
const input = process.argv;
if (input[2] == "add") {
    fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
    fs.unlinkSync[input[3]];
} else {
    console.log("Invallid Input");
}
// fs.writeFileSync(
//     "text.txt",
//     "This is the file contents to be created. If you are reading this in file congratulations."
// );
