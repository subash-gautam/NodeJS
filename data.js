const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    name: String,
    age: Number,
});
module.exports = mongoose.model("lrns", dataSchema);
