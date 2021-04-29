/**
 * Trainee Router : /trainee/...
 */

const router = require("express").Router();

const traineeController = require("../controllers/controllersTrainee");

router.post("/trainee/signup", traineeController.signUp);
router.post("/trainee/signin", traineeController.signIn);

router.get("/trainee/dashboard/:id", traineeController.dashboard);

router.get("/trainee/modules", traineeController.allModules);
router.get("/trainee/modules/:id", traineeController.oneModule);

router.get("/trainee/flybooking", traineeController.instructorsList);

router.post("/trainee/profile/add", traineeController.profileAdd);
router.get("/trainee/profile/:id", traineeController.profile);
router.put("/trainee/profile/:id", traineeController.profileEdit);
router.delete("/trainee/profile/:id", traineeController.profileDelete);

module.exports = router;
