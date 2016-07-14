'use strict';

const surveyApi = require('./surveyFetch.js');
//const Handlebars = require('handlebars');

let dataSurvey = {};

const completeSurveySuccess = () => {
  console.log("complete!");
};

const completeSurveyFailure = (error) => {
  console.error(error);
};

const getASurveySuccess = (data) => {
  $('#take-a-survey').empty();
  console.log(data);
  let ASurveyListing = require('../templates/getASurvey.handlebars');
  $('#take-a-survey').append(ASurveyListing(data));
  console.log("get a survey success!");
  $('#submit-votes').on('click', function() {
    let arr = [];
    let surveyId = $('h3').attr('id');
    let surveyLength = 3;
    // Handlebars.registerHelper('position', function (){
    //   surveyLength ++;
    // });
    for (let i = 0; i < surveyLength; i++) {
      arr.push($('input[type=radio]:checked').attr('id'));
    }
    console.log(arr);
    console.log(surveyId);
    // surveyApi.sendSurveyVotes(survey_id, arr)
    // .done(completeSurveySuccess)
    // .fail(completeSurveyFailure);
  });
};

const getASurveyFailure = (error) => {
  console.error(error);
};

const getSurveySuccess = (data) => {
  // console.log(data.surveys);
  dataSurvey = data;
  let surveyListing = require('../templates/getAllSurveys.handlebars');
  $('#get-every-survey').append(surveyListing(data));
  console.log("get all survey success!");

  $('.btn-warning').on('click', function() {
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
  $('#get-every-survey').empty();
  console.log("hi");
  surveyApi.getSurveysAgain()
    .done(getSurveySuccess)
    .fail(getSurveyFailure);
  console.log("deleted!");
};

const deleteSurveyError = (error) => {
  console.error(error);
};

const backDataSurvey = () => {
  return dataSurvey;
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
  backDataSurvey,
};
