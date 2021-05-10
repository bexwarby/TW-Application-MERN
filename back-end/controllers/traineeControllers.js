/**
 * Trainee Controller
 */
const Trainee = require("../models/User");
const Module = require("../models/Module");

const jwt = require("jsonwebtoken");

module.exports = {
  /* USER CONTROLLERS */
  signUp: async (req, res) => {
    console.log("trainee incoming", req.body);
    const {
      fullName,
      email,
      password,
      modules,
      flightHours,
      equipment,
      otherEquipment,
      software,
      availability,
      wishedWork,
      language,
      otherLanguage,
      birthDay,
      addComment,
    } = req.body;

    if (otherEquipment) {
      equipment.push(otherEquipment);
    }
    let lang = [];
    if (language) {
      lang.push(language);
    }
    if (otherLanguage) {
      lang.push(otherLanguage);
    }

    const docTrainee = new Trainee({
      fullName,
      email,
      password,
      role: "trainee",
      flightHours,
      equipment,
      software,
      availability,
      wishedWork,
      wishedlearn: modules,
      language: lang,
      birthDay,
      addComment,
      dateInsert: Date.now(),
    });

    docTrainee.save((err, doc) => {
      if (err) {
        res.status(501).json({ message: err.message });
      } else {
        res.json({ message: "New trainee created!", traineeId: doc._id });
      }
    });
  },

  /* USER CONTROLLERS */
  signIn: async (req, res) => {
    const { email, password } = req.body;

    try {
      const trainee = await Trainee.findOne({ email, role: "trainee" });

      if (!trainee) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }

      const encryption = require("../tools/crypt/encryption");
      const validation = encryption.compare(password, trainee.password);
      if (!validation) {
        return res.status(401).json({ error: "Mot de passe incorrect !" });
      } else {
        const token = jwt.sign(
          { traineeId: trainee._id },
          process.env.JWT_SECRET_TOKEN_TRAINEE,
          {
            expiresIn: "24h",
          }
        );
        return res.status(200).json({
          traineeId: trainee._id,
          token: token,
        });
      }
    } catch (err) {
      console.log(err);
    }
  },

  /*CALENDAR BOOKING*/

  calendar: async (req, res) => {
    const { traineeId, startDate, endDate, time } = req.body;

    try {
      await Trainee.findByIdAndUpdate(
        traineeId,
        {
          $addToSet: {
            availabilities: { startDate, endDate, time },
          },
        },
        { new: true, upsert: true },
        (err, doc) => {
          if (err) return res.status(400).json({ msg: err });
          else res.status(201).json({ message: "New Lesson booked" });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },

  /* DASHBOARD CONTROLLERS */
  dashboard: (req, res) => {
    console.log(req.params.id);
    res.status(200).json({ traineeId: req.params.id });
  },
  oneModule: (req, res) => {
    console.log(req.params.id);
    res.status(200).json({ moduleId: req.params.id });
  },
  instructorsList: (req, res) => {
    console.log("Demande de mes instructeurs");
    res.status(200).send("Demande liste des instructeurs");
  },

  /* PROFILE CONTROLLERS */
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

  allModules: async (req, res) => {
    try {
      const modules = await Module.find({})
      if(res) res.status(200).json(modules)
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
    
  },

  addModule: (req, res) => {
    const userId = req.params.id
    res.status(200).json({message: `${userId}, votre module est enregistré.`})
    // const optionModule = new Module({
    //   levelName: req.body.moduleSelect,
    //   nbHours: req.body.hours,
    //   stepsPrice: req.body.price,
    //   steps: req.body.choixOption,
    // });
    // optionModule
    //   .save()
    //   .then(() => {
    //     res
    //       .status(200)
    //       .json({ message: `Vous avez selectionner le ${moduleName}` });
    //   })
    //   .catch((error) => {
    //     res.status(400).json({ message: error });
    //   });
  },

};
