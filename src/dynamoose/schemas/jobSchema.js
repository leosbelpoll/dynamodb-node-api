"use strict";

const dynamoose = require("dynamoose");
const UserSchema = require("./userSchema");

module.exports = new dynamoose.Schema(
  {
    id: Number,
    title: String,
    status: String,
    user: UserSchema,
    createdAt: String,
    completedAt: String,
  },
  {
    saveUnknown: true,
  }
);
