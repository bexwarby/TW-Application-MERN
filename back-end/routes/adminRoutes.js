/**
 * Admin Router : /admin/...
 */

const router = require("express").Router();

const adminController = require("../controllers/controllersAdmin");

router.post("/admin/dbInitModules", adminController.dbInitModules);

module.exports = router;
