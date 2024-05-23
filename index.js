const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbConnet() {
    let result = await client.connect();
    let db = result.db("learn");
    return db.collection("lrn");
    // let response = await collection.find({}).toArray();
    // console.log(response);
}
// // Non recommened way : without making functon
// dbConnet().then((resp) => {
//     resp.find()
//         .toArray()
//         .then((data) => {
//             console.log(data);
//         });
// });

// recommend way : making functon
const main = async () => {
    let data = await dbConnet();
    data = await data.find().toArray();
    console.log(data);
};

main();
