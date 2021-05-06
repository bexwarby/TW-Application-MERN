/**
 * users Router : /usr/...
 * gère les routes de signup et signin sans le middleware auth (JWT)
 */

const router = require("express").Router()

const adminController = require("../controllers/adminControllers")
const traineeController = require("../controllers/traineeControllers")
const instructorController = require("../controllers/instructorControllers");


//admin
router.post('/admin/signin', adminController.signIn)

// trainee
router.post("/trainee/signup", traineeController.signUp)
router.post("/trainee/signin", traineeController.signIn)

// instructor
router.post("/instructor/signup", instructorController.signUp) 
router.post("/Instructor/signin", instructorController.signIn)


module.exports = router;
