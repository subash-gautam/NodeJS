const express = require("express");
const app = express();

const reqFilter = (req, resp, next) => {
    if (!req.query.age) resp.send("<h1>Provie age plese....");
    else if (req.query.age < 18)
        resp.send("<h1>This is age restricted page...");
    else next();
};
// app.use(reqFilter);

app.get("/", (req, resp) => {
    resp.send("<h1> Welcome to home page....");
});
app.get("/about", (req, resp) => {
    resp.send("<h1> I can not say about me rn....");
});
app.get("/age", reqFilter /*Single routed middleware*/, (req, resp) => {
    resp.send("<h1> Welcome, You are allowed to visit this page...");
});
app.listen(5000, () => {
    console.log("Port = 5000");
});
