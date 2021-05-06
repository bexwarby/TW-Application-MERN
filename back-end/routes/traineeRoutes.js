/**
 * Trainee Router : /trainee/...
 */

const router = require("express").Router();

const traineeController = require("../controllers/traineeControllers");


router.get("/dashboard/:id", traineeController.dashboard);

router.get("/modules", traineeController.allModules);
router.get("/modules/:id", traineeController.oneModule);

router.get("/flybooking", traineeController.instructorsList);

router.post("/profile/add", traineeController.profileAdd);
router.get("/profile/:id", traineeController.profile);
router.put("/profile/:id", traineeController.profileEdit);
router.delete("/profile/:id", traineeController.profileDelete);

module.exports = router;
