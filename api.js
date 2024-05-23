const express = require("express");
const dbConnect = require("./mongoDb");
const app = express();

app.get("/", async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
    console.log(data);
});

app.listen(5000, () => {
    console.log("Listening to port 5000....");
});
