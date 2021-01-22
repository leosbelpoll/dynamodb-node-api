"use strict";

const dynamoose = require("dynamoose");
const JobSchema = require("../schemas/jobSchema");

module.exports = dynamoose.model("jobs", JobSchema);
