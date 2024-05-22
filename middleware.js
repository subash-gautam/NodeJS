module.exports = reqFilter = (req, resp, next) => {
    if (!req.query.age) resp.send("<h1>Provie age plese....");
    else if (req.query.age < 18)
        resp.send("<h1>This is age restricted page...");
    else next();
};
