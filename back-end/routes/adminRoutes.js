/**
 * Admin Router : /admin/...
 */

const router = require("express").Router();
const adminController = require("../controllers/adminControllers");

router.get("/pending", adminController.pending); 
router.put("/validate/:id", adminController.validate); 


module.exports = router;
