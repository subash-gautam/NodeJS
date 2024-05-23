const dbConnect = require("./mongoDb.js");

const updateDate = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: "krishna", age: 58 },
        { $set: { name: "Shyaam" } }
    );
    console.warn("Data Updated !!");
};
updateDate();
