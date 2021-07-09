var express = require("express");

var router = express.Router();


//TODO:: add in error and info 



router.use("/", require("./home"));
router.use("/sleeves", require("./sleeves"));



module.exports = router;
