/**
 * Trainee Controller
 */
const traineeController = {
  signUp: async (req, res) => {
    const trainee = require("../models/User");
    const { fullName, email, password } = req.body;

    trainee.save((err) => {
      if (err) {
        res.status(501).json({ message: err, data: "" });
      } else {
        res.json({ message: "New trainee created!", data: contact });
      }
    });
  },

  signIn: (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
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
