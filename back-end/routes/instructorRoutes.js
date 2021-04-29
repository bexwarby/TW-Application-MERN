/**
 * Instructor Router : /instuctor/...
 */

const router = require("express").Router();
const instructorController = require("../controllers/controllersInstructor");

router.post("/signup", instructorController.signUp);
router.post("/signin", instructorController.signIn);

module.exports = router;
