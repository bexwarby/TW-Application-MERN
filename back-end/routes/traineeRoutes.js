/**
 * Trainee Router : /trainee/...
 */

const router = require("express").Router();

const traineeController = require("../controllers/traineeControllers");

router.put("/calendar/book", traineeController.calendar);

router.get("/dashboard/:id", traineeController.dashboard);


router.get("/flybooking", traineeController.instructorsList);

router.post("/profile/add", traineeController.profileAdd);
router.get("/profile/:id", traineeController.profile);
router.put("/profile/:id", traineeController.profileEdit);
router.delete("/profile/:id", traineeController.profileDelete);

router.get("/modules", traineeController.allModules);
router.post("/module/:id", traineeController.addModule);

module.exports = router;
