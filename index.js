const express = require("express");
const EventEnitter = require("events");
const app = express();

const event = new EventEnitter();

let count = 0;
event.on("api call", () => {
    count++;
    console.log("Api called..." + count + " times.");
});
app.get("/", (req, resp) => {
    resp.send("API calling...");
    event.emit("api call");
});
app.get("/get1", (req, resp) => {
    resp.send("API calling...");
    event.emit("api call");
});
app.get("/getting2", (req, resp) => {
    resp.send("API calling...");
    event.emit("api call");
});
app.listen(3500, () => {
    console.log("Listening at post 3500.....");
});
