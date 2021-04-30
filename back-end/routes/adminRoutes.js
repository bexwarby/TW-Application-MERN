/**
 * Admin Router : /admin/...
 */

const router = require("express").Router();
const adminController = require("../controllers/controllersAdmin");


router.post("/dbInitModules", adminController.dbInitModules);

router.post('/signin', adminController.signIn)

module.exports = router;
