/**
 * Trainee Controller
 */
const bcrypt = require("bcrypt");
const traineeController = {
  signUp: async (req, res) => {
    const Trainee = require("../models/User");
    const { fullName, email, password } = req.body;

    const docTrainee = new Trainee({
      fullName: fullName,
      email: email,
      password: password,
      instructor: false,
      admin: false,
      trainee: true,
      flightHours: 0,
      licenceFile: "",
      birthDay: "",
      bio: "",
      photo: "",
      dateInsert: Date.now(),
      enabled: true,
    });

    docTrainee.save((err) => {
      if (err) {
        res.status(501).json({ message: err });
      } else {
        res.json({ message: "New trainee created!" });
      }
    });
  },

  signIn: async (req, res) => {
    const { email, password } = req.body;
    const Trainee = require("../models/User");
    const trainee = await Trainee.findOne({ email });

    if (!trainee) {
      return res.status(401).json({ error: "Utilisateur non trouvé !" });
    }
    const validation = await bcrypt.compare(password, trainee.password);
    if (!validation) {
      return res.status(401).json({ error: "Mot de passe incorrect !" });
    }

    return res.status(200).json({ traineeId: trainee._id });
  },

  dashboard: (req, res) => {
    console.log(req.params.id);
    res.status(200).json({ traineeId: req.params.id });
  },

  allModules: (req, res) => {
    console.log("Demande de mes modules ");
    res.status(200).send("Demande liste des mes modules");
  },
  oneModule: (req, res) => {
    console.log(req.params.id);
    res.status(200).json({ moduleId: req.params.id });
  },

  instructorsList: (req, res) => {
    console.log("Demande de mes instructeurs");
    res.status(200).send("Demande liste des instructeurs");
  },

  profileAdd: (req, res) => {
    console.log(req.body);
    res.status(201).json({ traineeId: req.body });
  },
  profile: (req, res) => {
    console.log(req.params.id);
    res.status(200).json({ traineeId: req.params.id });
  },
  profileEdit: (req, res) => {
    console.log(req.params.id);
    res.status(201).json({ traineeId: req.params.id });
  },
  profileDelete: (req, res) => {
    console.log(req.params.id);
    res.status(200).send(`trainee ${req.params.id} a bien été supprimé`);
  },
};

module.exports = traineeController;
