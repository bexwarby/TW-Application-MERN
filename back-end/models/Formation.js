const mongoose = require("mongoose");
const { Schema } = mongoose;

const lessonSchema = new Schema({

  userId: { type: String, required: true },
  user_userId: { type: String, required: true },
  instructorName: { type: String, required: true },
  traineeName: { type: String, required: true },
  notation: { type: String, required: true },

  lessonName: { type: String, required: true },
  hoursRequested: String,
  timeTeaching: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  time: { type: Number, required: true },
  moduleName: { type: String, required: true },
  moduleId: { type: String, required: true },
  prepaid: Number,
  equipmentName: [String],
  software: [String],
  canceled: { type: Boolean, required: true },
  language: { type: String, required: true },

});

const formationSchema = new Schema({
  trainee: traineeSchema,
  lessons: [lessonSchema],
  goal: { type: String, required: true },
  percentHandling: { type: Number, required: true },
  percentProcedures: { type: Number, required: true },
  percentKnowledge: { type: Number, required: true },
  percentTrajectory: { type: Number, required: true },
  percentCommunication: { type: Number, required: true },
});

module.export = mongoose.model("Formation", formationSchema);
