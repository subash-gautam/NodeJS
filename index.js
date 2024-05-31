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
app.listen(4000);
