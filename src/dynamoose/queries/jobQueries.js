"use strict";

const JobModel = require("../../dynamoose/models/jobModel");

module.exports.getJobs = async () => {
  return await JobModel.scan().exec();
};

module.exports.getJob = async (id) => {
  return await JobModel.get(id);
};

module.exports.removeJobs = async (ids) => {
  return await JobModel.batchDelete(ids);
};

module.exports.updateJobs = async (jobs) => {
  return await JobModel.batchPut(jobs);
};
