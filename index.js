const dbConnet = require("./mongoDb.js");

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
    data = await data.find(/*filter here */).toArray();
    console.log(data);
};

main();
