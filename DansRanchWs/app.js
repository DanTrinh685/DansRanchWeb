var express = require('express')
var path = require('path');
const MongoClient = require("mongodb").MongoClient
var db;
var app = express();
require('dotenv/config');

MongoClient.connect("mongodb+srv://admin:dantrinh@dansranch.bga8u.mongodb.net/Inventory?retryWrites=true&w=majority",{useUnifiedTopology:true, useNewUrlParser:true, useCreateIndex:true}, function(err, database) {
    if (err) return console.log(err);
    db = database.db("Inventory");
})

app.get("/", function(req,res){
    var cursor = db.collection("images").find({name:"Logo"}).toArray(function(err, home){
        console.log(home);
        res.render("home/home", {home:home})
    });
    console.log(cursor); 
});

app.get("/home", function(req,res){
    var cursor = db.collection("images").find({name:"Logo"}).toArray(function(err, home){
        console.log(home);
        res.render("home/home", {home:home})
    });
    console.log(cursor); 
});

app.get("/sleeves", function(req,res){
    var cursor = db.collection("images").find({name:{$ne: "Logo"}}).toArray(function(err, results){
        console.log(results);
        res.render("sleeves/sleeves", {results:results})
    });
    console.log(cursor); 
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.set('port', process.env.PORT || 3000);

app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
})
