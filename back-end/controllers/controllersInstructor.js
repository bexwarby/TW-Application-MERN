/**
 * Instructor Controller
 */
const instructorController = {
  signUp: (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
  },

  signIn: (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
  },
};

module.exports = instructorController;
