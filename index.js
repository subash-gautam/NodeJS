const express = require("express");
const app = express();

// application specific middleware : used to process requests for the entire application and is registered using the app. use() method
const reqFilter = (req, resp, next) => {
    if (!req.query.age) resp.send("<h1>Provie age plese....");
    else if (req.query.age < 18) resp.send("<h1>You might be under aged....");
    else next();
};
app.use(reqFilter);

app.get("/", (req, resp) => {
    resp.send("<h1> Welcome to home page....");
});
app.get("/about", (req, resp) => {
    resp.send("<h1> I can not say about me rn....");
});
app.get("/contact", (req, resp) => {
    resp.send("<h1> We are too far from wach other. <br> See you later...");
});
app.listen(5000, () => {
    console.log("Port = 5000");
});

// copied code
/*const express = require("express");
const app = express();
const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide your age");
    } else if (req.query.age < 18) {
        resp.send("You are under aged");
    } else {
        next();
    }
};

app.use(reqFilter);

app.get("/", (res, resp) => {
    resp.send("Welcome to Home page");
});

app.get("/users", (res, resp) => {
    resp.send("Welcome to Users page");
});
app.listen(5000);
*/
