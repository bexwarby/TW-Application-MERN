const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const myToken = jwt.verify(token, "clés_secrete_instructor");
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
