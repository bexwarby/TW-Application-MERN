/**
 * Instructor Router : /instuctor/...
 */

const instructorCtrl = require("../controllers/controllersInstructor");

const router = require("express").Router();
const validInstructor = require("../middlewares/tokenverifInstructor");

router.post("/signup", instructorCtrl.signUp);
router.post("/signup/rating", instructorCtrl.rating); /* inscription */
router.post("/signup/equipment", instructorCtrl.equipment);
router.post("/signup/language", instructorCtrl.language);
router.post("/signup/module", instructorCtrl.module);
router.post("/InstructorSignIn", instructorCtrl.signIn); /* connection */

router.get(
  "/dashboard",
  validInstructor,
  instructorCtrl.dashboard
); /* dashboard */

router.post("/fly", validInstructor, instructorCtrl.flyNow); /* flynow */

router.get("/calendar", validInstructor, instructorCtrl.calendar);

router.post("/profile/add", validInstructor, instructorCtrl.profileAdd);
router.get("/profile/:id", validInstructor, instructorCtrl.profile);
router.put("/profile/:id", validInstructor, instructorCtrl.profileEdit);
router.delete("/profile/:id", validInstructor, instructorCtrl.profileDelete);

module.exports = router;
