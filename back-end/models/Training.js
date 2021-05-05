const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * Schema statistiques
 */
const StatsSchema = new Schema({
  handling: { type: Number, required: true },
  procedures: { type: Number, required: true },
  knowledge: { type: Number, required: true },
  trajectory: { type: Number, required: true },
  communication: { type: Number, required: true },
});

/**
 * Schema leçon
 */
const LessonSchema = new Schema({
  /* Id de l'étape */
  stepId: {
    type: String,
    required: true,
  },

  /* Nom de l'étape */
  name: { type: String, required: true },

  /* Description de l'étape */
  description: String,

  /* Status du paiement */
  paid: {
    type: Boolean,
    default: false,
    required: true,
  },

  /* Date */
  date: Date,

  /* Statistiques */
  stats: StatsSchema,
});

/**
 * Schema formation
 */
const trainingSchema = new Schema({
  /* Id du module */
  moduleId: {
    type: String,
    required: true,
  },

  /* Nom du module */
  moduleName: {
    type: String,
    required: true,
  },

  /* Id de l'élève */
  traineeId: {
    type: String,
    required: true,
  },

  /* Nom de l'élève */
  traineeFullName: String,

  /* Id de l'instructeur */
  instructorId: {
    type: String,
    required: true,
  },

  /* Nom de l'instructeur */
  instructorFullName: String,

  /* Statistiques de leçons */
  lessonsStats: [LessonSchema],

  /* Statisitiques générales */
  stats: StatsSchema,

  /* Etat */
  done: {
    type: Boolean,
    default: false,
    required: true,
  },
});

module.export = mongoose.model("Formation", formationSchema);
