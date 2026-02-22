console.log("MEN stack crud app lab started...");

require("dotenv").config(); // load .env file and add env vars to process.env

// import dependencies
const express = require("express");  
const methodOverride = require("method-override"); // bc html forms support get & post only. it allows put and delete methods

const app = express(); // create

// middleware
app.use(express.urlencoded({ extended: false })); // parse html form data into req.body
app.use(methodOverride("_method")); // allow form to send PUT and DELETE requests

// routes

// home page
app.get("/", (req, res) => {
    res.render("home.ejs");
});

// test route
app.get("/test", (req, res) => {
    res.send("test route working");
});