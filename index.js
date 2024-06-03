const express = require("express");
require("./config");
const Data = require("./data");
const app = express();

app.use(express.json());

app.get("/search/:name", async (req, resp) => {
    console.log(req.params.name);
    // let items = await Data.find(req.params) //same thing as below.
    let items = await Data.find({
        name: req.params.name,
    });
    resp.send(items);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
