const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

/**
 * Schema disponibilités
 */
const AvailabilitiesSchema = new Schema({
  /* Date de début */
  startDate: {
    type: Date,
    required: true,
  },

  /* Date de fin */
  endDate: {
    type: Date,
    requried: true,
  },
});

/**
 * Schema utilisateur
 */
const UserSchema = new Schema({
  /* Nom d'utilisateur */
  fullName: { type: String, required: true },

  /* Email */
  email: { type: String, required: true, unique: true },

  /* Mot de passe */
  password: { type: String, required: true },

  /* Role */
  role: {
    type: String,
    enum: ["admin", "pending-instructor", "instructor", "trainee"],
    required: true,
  },

  /* Temps de vol en heures */
  flightHours: Number,

  /* Certifications */
  ratings: [String],

  /* Ids modules enseignés ou suivis */
  modules: [String],

  /* Equipements dont dipose l'utilisateur */
  equipment: [String],

  /* Logiciel dont dipose l'utilisateur */
  software: [String],

  /* Objectifs  d'heure d'enseignement ou de cours à suivre */
  weeklyHoursGoal: Number,

  /* Disponibilités */
  availabilities: [AvailabilitiesSchema],

  /* Langues */
  language: [String],

  /* Chemin vers le fichier de licence */
  licenceFile: String,

  /* Date de naissance */
  birthDay: Date,

  /* Description */
  bio: String,

  /* Chemin vers la photo */
  photo: String,

  /* Crédits d'heures de cours */
  credits: {
    type: Number,
    default: 0,
    min: 0,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.password || this.password.search(/$2[a-z].{57}/) === -1) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

module.exports = mongoose.model("User", UserSchema);
