const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/learn"); // MongoDb Connection
const lrnSchema = new mongoose.Schema({
    name: String,
    age: Number,
}); //Schema defination

// Create operation --> save()
const saveInDb = async () => {
    const lrnModel = mongoose.model("lrns", lrnSchema);
    let data = new lrnModel({ name: "mongoose", age: 45 });
    let result = await data.save();
    console.log(result);
};

// Update operation --> updateOne({},{$set:{}}) / updateMany()
let updateInDb = async () => {
    const lrnModel = mongoose.model("lrns", lrnSchema);
    let data = await lrnModel.updateOne(
        { name: "mongoose" },
        { $set: { age: 5 } }
    );
    console.log(data);
};

// Delete operation --> deleteOne({}) / deleteMany()
let deleteInDb = async () => {
    const lrnModel = mongoose.model("lrn", lrnSchema);
    let data = await lrnModel.deleteOne({ name: "mongoose" });
    console.log(data);
};

// Read operation --> find() / find(condition)
let findInDb = async () => {
    const lrnModel = mongoose.model("lrn", lrnSchema);
    let result = await lrnModel.find();
    console.log(result);
};

(async function () {
    console.clear();
    console.log("New O/P : ");
    await saveInDb(); //C
    await updateInDb(); //U
    await findInDb(); //R
    await deleteInDb(); //D
})();
