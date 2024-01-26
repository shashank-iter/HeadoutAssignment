const router = require("express").Router();
const { returnfile } = require("../controllers/web.Controller.js");
router.route("/").get((req, res) => {});

router.route("/data").get(returnfile) 

module.exports = router;
