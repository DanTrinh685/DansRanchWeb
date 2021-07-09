var express = require('express')
var path = require('path');
const MongoClient = require("mongodb").MongoClient
var db;
var app = express();

MongoClient.connect("mongodb+srv://admin:dantrinh@dansranch.bga8u.mongodb.net/Inventory?retryWrites=true&w=majority",{useUnifiedTopology:true, useNewUrlParser:true, useCreateIndex:true}, function(err, database) {
    if (err) return console.log(err);
    db = database.db("Inventory");
    app.listen(3000, function(){
        console.log("listening to port 3000")
    })
})
app.get("/", function (req, res) {
    // console.log("hello I'm on the start page");
    res.render("home/home");
 });

 app.get("/home", function (req, res) {
    // console.log("hello I'm on the start page");
    res.render("home/home");
 });


app.get("/sleeves", function(req,res){
    var cursor = db.collection("images").find({}).toArray(function(err, results){
        console.log(results);
        res.render("sleeves/sleeves", {results:results})
    });
    console.log(cursor); 
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");