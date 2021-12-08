#!/usr/bin/env node

const http = require("http");
const express = require("express");
var path = require('path');
var app = express();
const formidable = require('express-formidable')

app.use(express.json());
app.use(formidable());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const basePath = "/api/v1";

const fileParse = require("./routes/parserRoutes");
app.use(`${basePath}/file-extractor`, fileParse);

// Port Environment variable

// Creating the node server

var server = app.listen(8081, () => {
	const host = server.address().address;
	const { port } = server.address();
	console.log("App running at", host, port);
});
