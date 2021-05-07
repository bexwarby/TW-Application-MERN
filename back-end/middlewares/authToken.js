const jwt = require("jsonwebtoken");

module.exports = {
  admin: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const myToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN_ADMIN);
      const adminId = myToken.adminId;
      if (req.body.adminId && req.body.adminId !== adminId) {
        // throw "adminId n'est pas bon";
        res.redirect('/admin')
        return
      } else {
        next();
      }
    } catch {
      res.status(401).json({ message: "Admin non authentifié" });
    }
  },

  instructor: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const myToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN_INSTRUCTOR);
      const instructorId = myToken.instructorId;
      if (req.body.instructorId && req.body.instructorId !== instructorId) {
        // throw "InstructorId n'est pas bon";
        res.redirect('/instructor')
        return
      } else {
        next();
      }
    } catch {
      res.status(401).json({ message: "Instructor non authentifié" });
    }
  },

  trainee: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const myToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN_TRAINEE);
      const traineeId = myToken.traineeId;
      if (req.body.traineeId && req.body.traineeId !== traineeId) {
        // throw "traineeId n'est pas bon";
        res.redirect('/trainee')
        return
      } else {
        next();
      }
    } catch (err) {
      res.status(401).json({ message: "Non authentifié" });
    }
  }
}