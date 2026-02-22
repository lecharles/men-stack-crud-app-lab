console.log("MEN stack crud app lab started...");

require("dotenv").config(); // load .env file and add env vars to process.env

// import dependencies
const express = require("express");  
const methodOverride = require("method-override"); // bc html forms support get & post only. it allows put and delete methods
const mongoose = require("mongoose");

const app = express(); // create

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// log connection status
mongoose.connection.on("connected", () => { 
    // .connection baked in with mongoose. listens for "connected" event and runs callback function when event emitted
    console.log(`Connected... to MongoDB and to the model: ${mongoose.connection.name}`);
});

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

// listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});