const express = require("express");
const con = require("./config");
const app = express();
const port = 3500;

app.get("/", (req, resp) => {
    con.query("SELECT * FROM users", (err, result) => {
        if (!err) resp.json(result);
        else console.log(err);
    });
});

app.listen(port, () => console.log(`Listening to port ${port}`));
