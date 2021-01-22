"use strict";

const express = require("express");
const {
  getJob,
  getJobs,
  removeJobs,
  updateJobs,
} = require("../dynamoose/queries/jobQueries");

const router = express.Router();

router.get("/", async function (req, res) {
  const jobs = await getJobs();
  res.send(jobs);
});

router.get("/:id", async function (req, res) {
  const { id } = req.params;
  const job = await getJob(Number(id));
  res.send(job);
});

router.delete("/", async function (req, res) {
  const { ids } = req.body;
  await removeJobs(ids);
  res.send({});
});

router.put("/", async function (req, res) {
  const { jobs } = req.body;
  const updatedJobs = await updateJobs(jobs);
  res.send(updatedJobs);
});

module.exports = router;
