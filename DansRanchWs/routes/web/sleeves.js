var express = require("express");


var Sleeve = require("../../model/Sleeve");

var router = express.Router();

router.get("/", function(req, res){
    Sleeve.find({}).exec(function(err, Sleeves){
        if(err){console.log(err);}

        res.render("sleeves/sleeves", {Sleeves:Sleeves});
    });
 });


module.exports = router;

