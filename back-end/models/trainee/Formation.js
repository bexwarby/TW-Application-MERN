const mongoose = require("mongoose");
const { Schema } = mongoose;

const instructorSchema = require("../instructor/Instructor");
const traineeSchema = require("../trainee/Trainee");

// Pas sure que c'est nécessaire

/* const equipmentLessonSchema = new Schema({
  equipmentName: { type: String, required: true },
  software: { type: Boolean, required: true },
}); */

const datesLessonSchema = new Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  time: { type: Number, required: true },
});

const moduleLessonSchema = new Schema({
  moduleName: { type: String, required: true },
  moduleId: { type: String, required: true },
  prepaid: { type: Number, required: true },
});

const lessonSchema = new Schema({
  lessonName: { type: String, required: true },
  dates: datesLessonSchema,
  module: moduleLessonSchema,
  equipments: [equipmentLessonSchema],
  instructor: instructorSchema,
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

module.exports = mongoose.model("Formation", formationSchema);
