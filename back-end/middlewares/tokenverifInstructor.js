const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const myToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    const instructorId = myToken.instructorId;
    if (req.body.instructorId && req.body.instructorId !== instructorId) {
      throw "InstructorId n'est pas bon";
    } else {
      next();
    }
  } catch {
    res.status(401).json({ message: "Instructor non authentifié" });
  }
};
