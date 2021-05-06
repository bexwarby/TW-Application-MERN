/**
 * Admin Controller
 */

const adminController = {

  dbAddAdminUsers: async (req, res) => {
    const encryption = require("../tools/crypt/encryption");

    const Admin = require("../models/User");

    const docAdmin1 = new Admin({
      fullName: "Martin Dumont",
      email: "martin.dumont@true-wings.com",
      password: process.env.ADMIN1_PWD,
      instructor: false,
      admin: true,
      trainee: false,
      dateInsert: Date.now(),
      enabled: true,
    });

    docAdmin1.save((err) => {
      if (err) {
        res.status(501).json({ message: err });
      }
    });
    const deletedCount = await docAdmin1.collection.deleteMany({
      admin: { $eq: true },
    });

    const docAdmin2 = new Admin({
      fullName: "Truewings",
      email: "admin@true-wings.com",
      password: process.env.ADMIN2_PWD,
      dateInsert: Date.now(),
      enabled: true,
    });

    docAdmin2.save((err) => {
      if (err) {
        res.status(501).json({ message: err });
      } else {
        res.json({ message: "All admins created!" });
      }
    });
  },
  signIn: async (req, res) => {
    const User = require("../models/User");
    const encryption = require("../tools/crypt/encryption");

    const adminUser = await User.findOne({ email: req.body.email });

    try {
      if (!adminUser) {
        return res.status(401).json({ error: "Administrator nor found !" });
      }

      const valid = await encryption.compare(
        req.body.password,
        adminUser.password
      );

      if (!valid) {
        return res.status(401).json({ error: "Incorrect password !" });
      }
      res.status(200).json({
        userId: user._id,
        token: "TOKEN",
        message: "Administrator connects",
      });
    } catch (error) {
      if (error) res.status(500).json(error.message);
    }
  },
};

module.exports = adminController;

