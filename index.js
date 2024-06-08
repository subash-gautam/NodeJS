const express = require("express");
const con = require("./config");
const app = express();
const port = 3500;
app.use(express.json());

app.get("/", (req, resp) => {
    con.query("SELECT * FROM users", (err, result) => {
        if (!err) resp.json(result);
        else console.log(err);
    });
});
app.post("/", (req, resp) => {
    const data = req.body;
    con.query("INSERT INTO users SET ?", data, (err, result, fields) => {
        if (!err) resp.send(result);
        else console.log("Error encountered: ", err);
    });
});

app.listen(port, () => console.log(`Listening to port ${port}`));
