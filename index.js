const express = require("express");
require("./config");
const data = require("./data");
const app = express();

app.use(express.json());

// post
app.post("/create", async (req, resp) => {
    // const lrns = resp.send(req.body);
    let lrn = new data(req.body);
    let result = await lrn.save();
    console.log(result);
    resp.send(result);
    // resp.end();
});

app.get("/read", async (req, resp) => {
    let result = await data.find(); //to find all
    // let result = await data.find({ age: req.body.age }); // Specific
    console.log(result);
    resp.send(result);
});

app.put("/update", async (req, resp) => {
    if (req.body.ename) {
        let result = await data.updateOne(
            { name: req.body.ename },
            { $set: { name: req.body.name, age: req.body.age } }
        );
        resp.send(result);
    }
});

app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params); // This will log an object like { id: 'some-id' }
    let result = await data.deleteOne(req.params);
    resp.send(result);
    console.log(result);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
