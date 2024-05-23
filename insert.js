const dbConnect = require("./mongoDb");

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany([
        { name: "Rabin", age: 20 },
        { name: "rawi", age: 25 },
        { name: "Ravindra", age: 30 },
        { name: "Rachin", age: 15 },
    ]);
    if (result.acknowledged) console.log("Data Inserted !!");
    else console.log("Error in inserion. ");
};
insert();
