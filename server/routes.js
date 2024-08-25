const express = require("express");
const route = express.Router();
const { getAllData } = require("./manager");

route.get("/read", getAllData());

module.exports = route;
