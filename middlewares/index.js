const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = {
  global: (app) => {
    // connection with front side
    app.use(cors());

    // parse request to body-parser
    app.use(bodyParser.urlencoded({ extended: true }));

    // to can reach any image in uplaod folder
    app.use("/uploads", express.static("uploads"));

    app.use(express.json());
  },
  auth:require('./auth')
};
