const dbConnect = require("./mongoDb");

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertOne({ name: "Rabin", age: 20 });
    if (result.acknowledged) console.log("Data Inserted !!");
    else console.log("Error in inserion. ");
};
insert();
