/**
 * Trainee Router : /trainee/...
 */

const router = require("express").Router();
const traineeCrtl = require("../controllers/controllersTrainee");

router.post("/signup", traineeCrtl.signUp);
router.post("/signin", traineeCrtl.signIn);

router.get("/dashboard/:id", traineeCrtl.dashboard);

router.get("/modules", traineeCrtl.allModules);
router.get("/modules/:id", traineeCrtl.oneModule);

router.get("/flybooking", traineeCrtl.instructorsList);

router.post("/profile/add", traineeCrtl.profileAdd);
router.get("/profile/:id", traineeCrtl.profile);
router.put("/profile/:id", traineeCrtl.profileEdit);
router.delete("/profile/:id", traineeCrtl.profileDelete);


module.exports = router;
