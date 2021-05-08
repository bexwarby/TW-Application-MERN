/**
 * Admin Controller
 */
const User = require("../models/User");
const encryption = require("../tools/crypt/encryption");
const jwt = require('jsonwebtoken')

const adminController = {
  signIn: async (req, res) => {
    const adminUser = await User.findOne({ email: req.body.email, role: "admin" });
    console.log(adminUser);

    try {

      if (!adminUser) {
        return res.status(401).json({ error: "Administrator not found !" });
      }
      const valid = await encryption.compare(
        req.body.password,
        adminUser.password
      );

      if (!valid) {
        return res.status(401).json({ error: "Incorrect password !" });
      }

      const token = jwt.sign(
        { adminId: adminUser._id },
        process.env.JWT_SECRET_TOKEN_ADMIN,
        {
          expiresIn: "24h",
        }
      );

      return res.status(200).json({
        adminId: adminUser._id,
        token: token,
        message: "Administrator connects",
      });

    } catch (error) {
      if (error) res.status(500).json(error.message);
    }
  },

  signUp: async (req, res) => {

    const { fullName, email, password } = req.body;

    const docAdmin = new User({
      fullName,
      email,
      password,
      role: "admin",
    });

    docAdmin.save((err) => {
      if (err) {
        res.status(501).json({ message: err.message });
      } else {
        res.json({ message: "New admin created!" });
      }
    });
  },

  pending: async (req, res) => {
    try {
      const pendingUser = await User.find({ role: "pending-instructor" });
      console.log(pendingUser)
      if (!pendingUser) res.status(400).json({ message: "Aucun utilisateur à valider" })
      else res.status(200).json({ pendings: pendingUser })
    } catch (err) {
      console.log(err);
    }

  },
  validate: async (req, res) => {
    const userId = req.params.id
    try {
      await User.findByIdAndUpdate(
        userId, { role: 'instructor' }, { new: true }, (err, doc) => {
          if (err) { return res.status(400).json({ message: err }) }
          else { return res.status(201).json({ message: 'Instructor validated', instructor: doc }) }
        }
      )

    } catch (err) {
      console.log(err);
    }
    // console.log(adminUser);
  }
};

module.exports = adminController;

