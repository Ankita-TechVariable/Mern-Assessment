// const { json } = require("body-parser");
const express = require("express");
const { fileExtractor } = require("../controller/fileController");
const router = express.Router();

console.log("In authroute");

router.post("/parser", fileExtractor);

//var request = require("request");

module.exports = router;
