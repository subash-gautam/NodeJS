const dbConnect = require("./mongoDb");

let deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteOne({ name: "Rachin" });
    if (result.deletedCount) console.log("Data deleted successfully !!");
};
deleteData();
