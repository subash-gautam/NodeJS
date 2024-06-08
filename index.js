const express = require("express");
const con = require("./config");
const app = express();
const port = 3500;
app.use(express.json());

// read data from sql databse
app.get("/", (req, resp) => {
    con.query("SELECT * FROM users", (err, result) => {
        if (!err) resp.json(result);
        else console.log(err);
    });
});

// add data to sql database
app.post("/", (req, resp) => {
    const data = req.body;
    con.query("INSERT INTO users SET ?", data, (err, result, fields) => {
        if (!err) resp.send(result);
        else console.log("Error encountered: ", err);
    });
});

// update data of sql database
app.put("/:id", (req, resp) => {
    const data = [req.body.name, req.body.age, req.body.address, req.params.id];
    con.query(
        "UPDATE users SET name=?, age =?, address =? WHERE ID=?",
        data,
        (err, result, fields) => {
            if (!err) resp.send(result);
            else console.log("error : ", err);
        }
    );
});

// delete data from sql database
app.delete("/", (req, resp) => {
    const data = req.body;
});
app.listen(port, () => console.log(`Listening to port ${port}`));
