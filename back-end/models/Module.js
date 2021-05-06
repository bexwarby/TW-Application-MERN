/**
 * models/Module.js - Modèle module
 * Modélise un module comportant une ou plusieurs étapes
 *
 * Exemple de document:
 * --------------------
 *
 * const moduleExample = {
 *  name: "Vol de nuit",
 *  steps: [
 *    {
 *      name: "Le vol de nuit VFR",
 *      description: "Vol de nuit simple VFR evolution 3500-4500ft",
 *    },
 *    {
 *      name: "Le vol de nuit IFR",
 *      description: "Vol de nuit simple IFR approche",
 *    }
 *  ],
 *  level: "professional",
 *  stepPrice: 2
 * }
 */

/* Imports */
const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * Schema étape
 */
const StepSchema = new Schema({
  /* Nom de l'étape */
  name: { type: String, required: true, unique: true },

  /* Description de l'étape */
  description: String,
});

/**
 * Schema module
 */
const ModuleSchema = new Schema({
  /* Nom du module */
  name: { type: String, required: true },

  /* Etapes */
  steps: [StepSchema],

  /* Niveau */
  level: {
    type: String,
    enum: ["private", "professional", "expert"],
  },

  /* Niveau nom */
  levelName: {
    type: String,
    enum: [
      "Private pilot level (15h total)", 
      "Professional pilot level (25h total)", 
      "Expert pilot level (20h total)"
    ],
  },

  /* Prix de l'étape */
  stepPrice: {
    type: Number,
    min: 1,
    default: 1,
  },
});

module.exports = mongoose.model("Module", ModuleSchema);
