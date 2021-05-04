const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const myToken = jwt.verify(token, "clés_secrete_trainee");
    const traineeId = myToken.traineeId;
    if (req.body.traineeId && req.body.traineeId !== traineeId) {
      throw "traineeId n'est pas bon";
    } else {
      next();
    }
  } catch {
    res.status(401).json({ message: "Non authentifié" });
  }
};
