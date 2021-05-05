const mongoose = require("mongoose");
const { Schema } = mongoose;

const lessonSchema = new Schema({

  // BESOIN D'ID ?
  userId: { type: String, required: true },
  user_userId: { type: String, required: true },
  /* ICI POSSIBILITE DE FAIRE JUSTE fullName ?
  Voir models/User.js*/
  instructorName: { type: String, required: true },
  traineeName: { type: String, required: true },
  // retours de l'instructeur sur le cours
  notation: { type: String, required: true },

  // See controllersAdmin for lessons
  lessonName: { type: String, required: true },
  // front/InstructorSignUp/7HoursClass + TraineeSignUp :
  hoursRequested: String,
  // front/InstructorSignUp/8Time :
  timeTeaching: { type: String, required: true },
  
  // Calendar planning :
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  time: { type: Number, required: true },
  canceled: { type: Boolean, required: true },
  
  // front et back, choix de modules partout:
  moduleName: { type: String, required: true },
  moduleId: { type: String, required: true },
  
  prepaid: Number,
  // front/InstructorSignUp/5Equipment + TraineeSignUp:
  equipmentName: [String],
  // front/InstructorSignUp/6Software + TraineeSignUp:
  software: [String],
  // front/InstructorSignUp/9Language + TraineeSignUp:
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
