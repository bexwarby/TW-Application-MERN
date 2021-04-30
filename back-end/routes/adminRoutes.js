/**
 * Admin Router : /admin/...
 */

const router = require("express").Router();

const adminController = require("../controllers/controllersAdmin");

router.post("/dbInitModules", adminController.dbInitModules);

router.post("/dbAddAdminUsers", adminController.dbAddAdminUsers);

module.exports = router;
