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
        name: "Ud Gautam",
        email: "admin@subashgtm.com.np",
        country: "Nepal",
        skills: ["HTML", "CSS", "JavaScript", "C", "C++", "React", "Node JS"],
    };
    resp.render("profile", { user });
});

app.get("/", (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (_, resp) => {
    resp.sendFile(`${publicPath}/about.html`);
});

app.get("*", (_, resp) => {
    resp.sendFile(`${publicPath}/404.html`);
});

app.listen(4000, () => {
    console.log("Port is 4000");
});
