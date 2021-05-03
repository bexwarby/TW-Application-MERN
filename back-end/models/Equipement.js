const mongoose = require("mongoose");
const { Schema } = mongoose;

const equipmentSchema = new Schema({
    equipmentId ={ type: String, require:true},
    name = { type:String, require:true},
})
module.exports = mongoose.model("Equipment",equipmentSchema);
