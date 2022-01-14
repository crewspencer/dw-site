var express = require("express");
var app = express();
var ejs = require("ejs");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var path = require('path');

mongoose.connect("mongodb://localhost/demo-test");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(path.join(__dirname, '/public')));''
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

//Home Page
app.get("/", function(req, res){
  res.render("index");
});

app.get("/case-study", function(req, res){
  res.render("case-study");
});

app.get("/thank-you", function(req, res){
  res.render("thank-you");
});


// SERVER PORT LOCAL AND DEV ENVIRONMENT
// app.listen(8000, function (){
//   console.log("SERVER RUNNING ON PORT 8000");
// });

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Demo site has started");
});
