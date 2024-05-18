// const http = require("http");
import http from "http";
// const data = require("./3data");
import data from "./3data.js";
http.createServer((rq, rp) => {
    rp.writeHead(200, { "content-type": "applicationjson" });
    rp.write(JSON.stringify(data));
    rp.end();
}).listen(4000);
