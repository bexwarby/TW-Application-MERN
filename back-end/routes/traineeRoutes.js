/**
 * Trainee Router : /trainee/...
 */

const router = require("express").Router();

const traineeCrtl = require("../controllers/controllersTrainee");

router.post("/trainee/signup", traineeCrtl.signUp);
router.post("/trainee/signin", traineeCrtl.signIn);

router.get("/trainee/dashboard/:id", traineeCrtl.dashboard);

router.get("/trainee/modules", traineeCrtl.allModules);
router.get("/trainee/modules/:id", traineeCrtl.oneModule);

router.get("/trainee/flybooking", traineeCrtl.instructorsList);

router.post("/trainee/profile/add", traineeCrtl.profileAdd);
router.get("/trainee/profile/:id", traineeCrtl.profile);
router.put("/trainee/profile/:id", traineeCrtl.profileEdit);
router.delete("/trainee/profile/:id", traineeCrtl.profileDelete);

module.exports = router;
