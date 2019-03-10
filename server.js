// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js")
var apiRoutes = require("./app/routing/apiRoutes.js")
// Sets up the Express App
// =============================================================
var app = express();

var PORT = process.env.PORT || 3000;
// var path;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT,function(err){
    if (err){
      console.log(err);
    }
    console.log("connected to Port "  + PORT)
});