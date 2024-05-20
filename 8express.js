const express = require("express");
const app = express();

app.get("", (req, res) => {
    const name = req.query.name;
    res.send(
        "<h1>Hello, this is home page... </h1>Data(?name: ....) sent is " + name
    );
    // console.log(req.query)
});

app.get("/about", (req, res) => {
    res.send("<h1>Hello This is about page.</h1>");
});

app.listen(3000);
