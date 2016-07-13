'use strict';

//const app = require('../app.js');

const getSurveySuccess = () => {
  console.log("get all survey success!");
};

const getSurveyFailure = (error) => {
  console.error(error);
};

const getASurveySuccess = () => {
  console.log("get a survey success!");
};

const getASurveyFailure = (error) => {
  console.error(error);
};

const completeSurveySuccess = () => {
  console.log("complete!");
};

const completeSurveyFailure = (error) => {
  console.error(error);
};




module.exports = {
  getSurveySuccess,
  getSurveyFailure,
  getASurveySuccess,
  getASurveyFailure,
  completeSurveySuccess,
  completeSurveyFailure,
};
