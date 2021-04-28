const mongoose = require("mongoose");
const { Schema } = mongoose;

const equipmentSchema = new Schema({
    equipmentId ={ type: String, require:true},
    equipmentName = { type:String, require:true},
})
module.export= mongoose.model("Equipment",equipmentSchema);
