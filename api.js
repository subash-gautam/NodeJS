const express = require("express");
const dbConnect = require("./mongoDb");
const app = express();
app.use(express.json()); //required for post, put methods..

// Read data
app.get("/", async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
    console.log(data);
});

// Insert Data
app.post("/", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    resp.send(result);
});

// Update Data
app.put("/", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        // { name: "hari" },
        // { $set: { name: "hari baral" } } //static way
        { name: req.body.name },
        { $set: req.body } //Dynamic way
    );
    resp.send("data updated...");
});
app.listen(5000, () => {
    console.log("Listening to port 5000....");
});
