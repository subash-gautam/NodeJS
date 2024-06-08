const mysql = require("mysql");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
});

// Check if connected or not ?
con.connect((err) => {
    if (!err) console.log("Connected Successfully");
    else console.log("Error encountered: ", err);
});

con.query("SELECT * FROM users", (err, result) => {
    if (!err) console.log(result);
    else console.log(err);
});
