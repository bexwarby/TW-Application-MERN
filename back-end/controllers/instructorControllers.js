/**
 * Instructor Controller
 */

const Instructor = require("../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports = {
  /* USER CONTROLLERS */
  signUp: async (req, res) => {
    const {
      fullName,
      email,
      password,
      flightHours,
      ratingName,
      moduleName,
      equipmentName,
      software,
      hoursRequested,
      timeTeaching,
      language,
      licenceFile,
      birthDay,
      bio,
      // photo
    } = req.body;

    const docInstructor = new Instructor({
      fullName,
      email,
      password,
      role: "instructor",
      flightHours,
      ratingName,
      moduleName,
      equipmentName,
      software,
      hoursRequested,
      timeTeaching,
      language,
      licenceFile,
      birthDay,
      bio,
      // photo: '',
      datInsert: Date.now(),
    });
    console.log(req.body);

    docInstructor.save((err, doc) => {
      if (err) {
        res.status(501).json({ message: err });
      } else {
        console.log(doc);
        res.json({ message: "New Instructor created!", instructorId: doc._id });
      }
    });
  },

  module: (req, res) => {
    const Module = require("../models/Module");
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

  signIn: async (req, res) => {
    const { email, password } = req.body;

    try {
      const instructor = await Instructor.findOne({ email: email, role: "instructor" })
      if (!instructor) {
        return res.status(400).json({ message: "Instructeur non trouvée" });
      }

      const valid = await bcrypt.compare(password, instructor.password)
      if (!valid) {
        res.status(400).json({ message: "mot de passe erroné" });
        return;
      }

      const token = jwt.sign(
        { instructorId: instructor._id },
        process.env.JWT_SECRET_TOKEN_INSTRUCTOR,
        { expiresIn: "48h" }
      );

      res.status(200).json({
        message: "bien connecté",
        instructorId: instructor._id,
        token: token,
      });
      return

    } catch (err) {
      return res.status(500).json({ message: err })
    }

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
    const Calendar = require("../models/User");
    const calendarLessons = new Calendar({
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    });
    calendarLessons

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
