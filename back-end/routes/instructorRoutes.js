/**
 * Instructor Router : /instuctor/...
 */

const instructorCtrl = require("../controllers/controllersInstructor");

const router = require("express").Router();

router.post("/signup", instructorCtrl.signUp); /* inscription */
router.post("/signin", instructorCtrl.signIn); /* connection */

router.get("/dashboard", instructorCtrl.dashboard); /* dashboard */

router.post("/fly", instructorCtrl.flyNow); /* flynow */

router.get("/calendar", instructorCtrl.calendar);

router.post("/profile/add", instructorCtrl.profileAdd);
router.get("/profile/:id", instructorCtrl.profile);
router.put("/profile/:id", instructorCtrl.profileEdit);
router.delete("/profile/:id", instructorCtrl.profileDelete);

module.exports = router;