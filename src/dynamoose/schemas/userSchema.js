"use strict";

const dynamoose = require("dynamoose");

module.exports = new dynamoose.Schema(
  {
    id: Number,
    email: String,
    name: String,
    firstName: String,
    createdAt: String,
    updatedAt: String,
  },
  {
    saveUnknown: true,
  }
);
