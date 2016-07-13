'use strict';

const surveyApi = require('./surveyFetch.js');

const getASurveySuccess = (data) => {
  console.log(data);
  let ASurveyListing = require('../templates/getASurvey.handlebars');
  $('#get-every-survey').append(ASurveyListing(data));
  console.log("get a survey success!");
};

const getASurveyFailure = (error) => {
  console.error(error);
};

const getSurveySuccess = (data) => {
  // console.log(data.surveys);
 let surveyListing = require('../templates/getAllSurveys.handlebars');
 $('#get-every-survey').append(surveyListing(data));
  console.log("get all survey success!");

  $('.btn-warning').on('click', function(){
    let id = this.id;
    console.log(id);
    surveyApi.getASurvey(id)
    .done(getASurveySuccess)
    .fail(getASurveyFailure);
  });
};

const getSurveyFailure = (error) => {
  console.error(error);
};


const deleteSurveySuccess = () => {
  console.log("deleted!");
};

const deleteSurveyError = (error) => {
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
  deleteSurveySuccess,
  deleteSurveyError,
  completeSurveySuccess,
  completeSurveyFailure,
};
