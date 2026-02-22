console.log("MEN stack crud app lab started...");

require("dotenv").config(); // load .env file and add env vars to process.env

// import dependencies
const express = require("express"); 
const cors = require("cors"); 
const methodOverride = require("method-override"); // bc html forms support get & post only. it allows put and delete methods

const app = express(); // create an express app