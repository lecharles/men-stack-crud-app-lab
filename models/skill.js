// import mongoose
const mongoose = require('mongoose');

// create a schema for the skill model
const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: String,
    video: String,
    aiSummary: String,
});

// create db model from schema
const Skill = mongoose.model('Skill', skillSchema);

// export it so it can be used in other files
module.exports = Skill;