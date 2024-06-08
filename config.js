const mysql = require("mysql");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
});

// // Check if the connection works properly or not !!
// con.connect((err) => {
//     if (!err) console.log("mySql Connected Successfuly...");
//     else console.log("Error encountered : ", err);
// });

module.exports = con;
