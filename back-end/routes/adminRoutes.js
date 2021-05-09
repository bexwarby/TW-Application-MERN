/**
 * Admin Router : /admin/...
 */

const router = require("express").Router()
const adminController = require("../controllers/adminControllers")

router.post("/signup", adminController.signUp)
router.delete("/delete/:id", adminController.delete)

router.get("/pending", adminController.pending)
router.put("/validate/:id", adminController.validate)

router.get("/users", adminController.getUsers)


module.exports = router;
