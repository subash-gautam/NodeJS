const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("", (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (_, resp) => {
    const user = {
        name: "Peter",
        email: "peter@test.com",
        country: "USA",
    };
    resp.render("profile", { user });
});

app.get("/contact", (_, resp) => {
    resp.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (_, resp) => {
    resp.sendFile(`${publicPath}/help.html`);
});

app.get("*", (_, resp) => {
    resp.sendFile(`${publicPath}/nopage.html`);
});

app.listen(4000, () => {
    console.log("Port is 4000");
});
