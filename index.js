const express = require("express");
const reqFilter = require("./middleware");
const app = express();

app.use(reqFilter);

app.get("/", (req, resp) => {
    resp.send("<h1> Welcome to home page....");
});
app.get("/about", (req, resp) => {
    resp.send("<h1> I can not say about me rn....");
});
app.get("/contact", (req, resp) => {
    resp.send("<h1> Welcome, You are allowed to visit this page...");
});
app.listen(5000, () => {
    console.log("Port = 5000");
});
