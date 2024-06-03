const express = require("express");
require("./config");
const Data = require("./data");
const app = express();

app.use(express.json());

app.get("/search/:key", async (req, resp) => {
    let items = await Data.find({
        $or: [
            { name: { $regex: req.params.key } },
            // { age: { $regex: req.params.key } },// can search over multiple fields values
        ],
    });

    resp.send(items);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
