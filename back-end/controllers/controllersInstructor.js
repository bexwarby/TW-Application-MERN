/**
 * Instructor Controller
 */

/**TO DO
 * - signUp + signUp optimisation/mettre en place (voir controllersTrainee)
 * - teste d'unicite - avec un pre.
 * - ajouter les champs utile pour instructeur - voir Rebekah
 */

module.exports = {
  /* option a selectioner avant signUp*/
  rating: (req, res) => {
    const Rating = require("../models/Rating");
    const optionsRating = new Rating({
      equipmentId: req.body.id,
      name: req.body.name,
    });
    optionsRating.save((err) => {
      if (err) {
        res.status(501).json({ message: err });
      } else {
        res.json({ message: "New Rating created!" });
      }
    });
  },
  signUp: async (req, res) => {
    const Instructor = require("../models/User");
    const { fullName, email, password } = req.body;
    const docInstructor = new Instructor({
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

    docInstructor.save((err) => {
      if (err) {
        res.status(501).json({ message: err });
      } else {
        res.json({ message: "New Instructor created!" });
      }
    });
  },

  signIn: (req, res) => {
    console.log(req.body);
    res.status(201).json(req.body);
  },
  dashboard: (req, res) => {
    console.log(req.params.id);
    res.status(201).json({ instructorId: req.params.id });
  },
  flyNow: (req, res) => {
    console.log(req.body);
    res.status(201).json(req.body);
  },
  calendar: (req, res) => {
    console.log(req.body);
    res.status(201).json(req.body);
  },

  profileAdd: (req, res) => {
    console.log(req.body);
    res.status(201).json({ instuctorId: req.body });
  },
  profile: (req, res) => {
    console.log(req.params.id);
    res.status(200).json({ instructorId: req.params.id });
  },
  profileEdit: (req, res) => {
    console.log(req.params.id);
    res.status(201).json({ instructorId: req.params.id });
  },
  profileDelete: (req, res) => {
    console.log(req.params.id);
    res.status(200).send(`instuctor ${req.params.id} a été supprimer`);
  },
};
