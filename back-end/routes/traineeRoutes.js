/**
 * Trainee Router : /trainee/...
 */

const router = require("express").Router();

const traineeController = require("../controllers/controllersTrainee");
const controllTrainee = require("../middlewares/tokenverifTrainee");

router.post("/signup", traineeController.signUp);

router.post("/signin", traineeController.signIn);

router.get("/dashboard/:id", controllTrainee, traineeController.dashboard);

router.get("/modules", controllTrainee, traineeController.allModules);
router.get("/modules/:id", controllTrainee, traineeController.oneModule);

router.get("/flybooking", controllTrainee, traineeController.instructorsList);

router.post("/profile/add", controllTrainee, traineeController.profileAdd);
router.get("/profile/:id", controllTrainee, traineeController.profile);
router.put("/profile/:id", controllTrainee, traineeController.profileEdit);
router.delete("/profile/:id", controllTrainee, traineeController.profileDelete);

module.exports = router;
