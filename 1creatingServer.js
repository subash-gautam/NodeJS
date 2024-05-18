const http = require("http");

http.createServer((req, res) => {
    res.write("<h1>Hello world !! <br> I am hating this life.</h1>");
    res.end();
}).listen(4000);
