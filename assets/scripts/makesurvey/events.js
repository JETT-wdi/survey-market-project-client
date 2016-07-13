'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
//const index = require('../index.js');

const onShowMakeSurvey = () => {
  let link = document.querySelector('link[rel="import"]');
  let post = link.import.querySelector('#make-survey');
  let container = document.querySelector('#container');
  container.appendChild(post.cloneNode(true));
};

let optionCount = 4;
const onCreateOption = () => {
  let optionNumber = optionCount.toString();
  $( "#options" ).append( '<input type="text" name="survey[questions][answers][' +optionNumber+ ']" placeholder="Answer"><br>');
  optionCount++;
};

const onCreateQuestion = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log("onCreateQuestion was called");
  console.log(data);
  $('#options').val("");
};

const onCreateSurvey = () => {
  console.log("onCreateSurvey was called");
  console.log(data);
  api.createSurvey(data)
  .done(ui.createSurveySuccess)
  .fail(ui.createSurveyFailure);
};

const onDeleteSurvey = () => {
  let data = $('#survey-title').val();
  api.deleteSurvey(data)
  .done(ui.deleteSurveySuccess)
  .fail(ui.deleteSurveyError);
};

const addHandlers = () => {
  $('#make-new-survey').on('click', onShowMakeSurvey);
  $('#add-another-answer').on('click', onCreateOption);
  $('#survey-fillout').on('submit', onCreateQuestion);
  $('#complete-survey-creation').on('click', onCreateSurvey);
  $('#delete-a-survey').on('click', onDeleteSurvey);
};

module.exports = {
  addHandlers,
};
