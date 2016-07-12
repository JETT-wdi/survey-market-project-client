'use strict';

//const app = require('../app.js');

const createSurveySuccess = (data) => {
  console.log(data);
};

const createSurveyFailure = (error) => {
  console.error(error);
};

const updateSurveySuccess = () => {
  console.log("success!");
};

const updateSurveyFailure = (error) => {
  console.error(error);
};

const deleteSurveySuccess = () => {
  console.log("deleted!");
};

const deleteSurveyError = (error) => {
  console.error(error);
};




module.exports = {
  createSurveySuccess,
  createSurveyFailure,
  updateSurveySuccess,
  updateSurveyFailure,
  deleteSurveySuccess,
  deleteSurveyError
};