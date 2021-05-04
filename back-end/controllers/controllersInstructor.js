/**
 * Instructor Controller
 */

const User = require("../models/User");

module.exports = {

  /* USER CONTROLLERS */
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
      ratingName: "",
      moduleName: "",
      equipmentName: "",
      software: "",
      hoursRequested: 0,
      timeTeaching: "",
      language: "",
      licenceFile: "",
      birthDay: "",
      bio: "",
      photo: "",
      dateInsert: Date.now(),
      enabled: true,
    });
    console.log(req.body);

    docInstructor.save((err) => {
      if (err) {
        res.status(501).json({ message: err });
      } else {
        res.json({ message: "New Instructor created!" });
      }
    });
  },
  equipment: (req, res) => {
    const Equipment = require("../models/Equipement");
    const optionEquipment = new Equipment({
      equipmentId: req.body.equipmentId,
      name: req.body.name,
    });
    optionEquipment
      .save()
      .then(() => {
        res.status(200).json({
          message: `Equipement selectionner ${req.body.equipmentId}`,
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error });
      });
  },
  language: (req, res) => {
    const Language = require("../models/language");
    const optionLanguage = new Language({
      languageCodeIso: req.body.codeiso,
      language: req.body.codeiso,
    });
    optionLanguage
      .save()
      .then(() => {
        res.status(200).json({ message: "Langage selectioner" });
      })
      .catch((error) => {
        res.status(400).json({ message: error });
      });
  },
  module: (req, res) => {
    const Module = require("../models/module");
    const { moduleName, nbHours, price, steps } = req.body;
    const optionModule = new Module({
      moduleName,
      nbHours,
      price,
      steps,
    });
    optionModule
      .save()
      .then(() => {
        res
          .status(200)
          .json({ message: `Vous avez selectionner le ${moduleName}` });
      })
      .catch((error) => {
        res.status(400).json({ message: error });
      });
  },
  rating: (req, res) => {
    const Rating = require("../models/Rating");
    const optionsRating = new Rating({
      ratingName: req.body.ratingName,
    });
    optionsRating
      .save()
      .then(() => {
        res.status(201).json({ message: `Equipement chois ${optionsRating}` });
      })
      .catch((error) => {
        res.status(400).json({ error: error });
      });
  },
  signIn: (req, res) => {
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          return res.status(400).json({ message: "Instructeur non trouvée" });
        }
        bcrypt
          .compare(req.body.password, user.password)
          .then((confirmation) => {
            if (!confirmation) {
              res.status(400).json({ message: "mot de passe erroné" });
            }
            res.status(200).json({ message: "bien connecté" });
          })
          .catch((error) => res.status(500).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  },

  /* DASHBOARD CONTROLLERS */
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

  /* PROFILE CONTROLLERS */
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
