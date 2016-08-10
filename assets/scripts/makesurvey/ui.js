'use strict';
const surveys = require('../takesurvey/events.js')

//const app = require('../app.js');

const createSurveySuccess = (data) => {
  $('#survey-title-input').show();
  $('#survey-test-title').val("");
  $('#survey-title').text("");
  $('#make-survey').hide();
  $('#get-every-survey').html("");
  surveys.onGetSurveys();

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

// const deleteSurveySuccess = () => {
//   console.log("deleted!");
// };
//
// const deleteSurveyError = (error) => {
//   console.error(error);
// };




module.exports = {
  createSurveySuccess,
  createSurveyFailure,
  updateSurveySuccess,
  updateSurveyFailure,
  // deleteSurveySuccess,
  // deleteSurveyError
};
