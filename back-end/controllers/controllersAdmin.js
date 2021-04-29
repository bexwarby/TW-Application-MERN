/**
 * Admin Controller
 */

const adminController = {
  dbInitModules: async (req, res) => {
    //
    const Module = require("../models/Module");
    /*
    const { fullName, email, password } = req.body;

    const docModule = new Module({
      fullName: fullName,
      email: email,
      password: password,
      instructor: false,
      admin: false,
      trainee: true,
      flightHours: 0,
      licenceFile: "",
      birthday: "",
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
    });*/
  },
};

module.exports = adminController;
