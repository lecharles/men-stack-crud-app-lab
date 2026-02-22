console.log("MEN stack crud app lab started...");

require("dotenv").config(); // load .env file and add env vars to process.env

// import dependencies
const express = require("express");  
const methodOverride = require("method-override"); // bc html forms support get & post only. it allows put and delete methods
const mongoose = require("mongoose");
const Skill = require("./models/skill.js"); // import skill model to use it in routes

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

// INDEX route - show all skills
app.get("/skills", async (req, res) => {
    const allSkills = await Skill.find({}); // find all skills in db
    const hasSkills = allSkills.length > 0; // check if there are any skills in db
    res.render("skills/index.ejs", { skills: allSkills, hasSkills }); // pass all skills and hasSkills boolean to index.ejs to use in rendering page
});

// NEW route - show form to create new skill
app.get("/skills/new", (req, res) => {
    res.render("skills/new.ejs");
});

// CREATE route - take data from NEW form & create new skill in db + redirect to index
app.post("/skills", async (req, res) => {
    await Skill.create(req.body); 
    res.redirect("/skills"); 
});

// SHOW route - show details about one skill
app.get("/skills/:id", async (req, res) => {
    const skill = await Skill.findById(req.params.id); // find skill by id from url params
    res.render("skills/show.ejs", { skill }); // pass skill to show.ejs to use in rendering page
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});