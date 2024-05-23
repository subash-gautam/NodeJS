const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbConnet() {
    let result = await client.connect();
    let db = result.db("learn");
    return db.collection("lrn");
}

module.exports = dbConnet;
