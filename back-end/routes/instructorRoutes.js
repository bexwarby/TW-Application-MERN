/**
 * Instructor Router : /instuctor/...
 */

const router = require("express").Router();
const instructorControllers = require("../controllers/instructorControllers");


router.get("/dashboard", instructorControllers.dashboard); /* dashboard */

router.post("/fly", instructorControllers.flyNow); /* flynow */

router.get("/calendar", instructorControllers.calendar);

router.post("/profile/add", instructorControllers.profileAdd);
router.get("/profile/:id", instructorControllers.profile);
router.put("/profile/:id", instructorControllers.profileEdit);
router.delete("/profile/:id", instructorControllers.profileDelete);

module.exports = router;
