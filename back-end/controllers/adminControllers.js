/**
 * Admin Controller
 */
const User = require("../models/User");
const encryption = require("../tools/crypt/encryption");

const adminController = {
  signIn: async (req, res) => {
    const adminUser = await User.findOne({ email: req.body.email, role: "admin" });

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
          expiresIn: "8h",
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

    const docTrainee = new Trainee({
      fullName,
      email,
      password,
      role: "admin",
      dateInsert: Date.now(),
    });

    docTrainee.save((err) => {
      if (err) {
        res.status(501).json({ message: err.message });
      } else {
        res.json({ message: "New trainee created!" });
      }
    });
  },
};

module.exports = adminController;

