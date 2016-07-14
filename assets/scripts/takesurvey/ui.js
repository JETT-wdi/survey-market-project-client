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
  console.log(data);
  let surveyLength = data.survey.questions.length;
  console.log(surveyLength);
  $('#take-a-survey').empty();
  let ASurveyListing = require('../templates/getASurvey.handlebars');
  $('#take-a-survey').append(ASurveyListing(data));
  console.log("get a survey success!");
  $('#submit-votes').on('click', function() {
    let questionAndAnswerArray = [];
    let surveyId = $('h3').attr('id');
    console.log(surveyId);
    // Handlebars.registerHelper('position', function (){
    //   surveyLength ++;
    // });
    let radios = document.getElementsByClassName("radio-button");

    console.log(radios);
    for (let i = 0; i < radios.length ; i++) {
      if(radios[i].checked) {
          questionAndAnswerArray.push([radios[i].attributes.name.value, radios[i].attributes.id.value]);
      }
    }
    console.log("here's the array!");
    console.log(questionAndAnswerArray);
    console.log(questionAndAnswerArray.length);
    console.log(surveyId);
    surveyApi.sendSurveyVotes(surveyId, questionAndAnswerArray)
    .done(completeSurveySuccess)
    .fail(completeSurveyFailure);
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
    console.log("here's an id!");
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
