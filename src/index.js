"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dynamoose = require("dynamoose");

const jobRouter = require("./routes/jobs");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/jobs", jobRouter);

dynamoose.aws.sdk.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const PORT = process.env.SERVER_PORT || 8080;

app.get("/", (req, res) => {
  res.send("it works!");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
