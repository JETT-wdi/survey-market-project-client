'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
//const index = require('../index.js');
const createPostObject = require('./create-post-object.js');

const onShowMakeSurvey = () => {
  $('#make-survey').show();
};

const onCreateTitle = (event) =>{
  event.preventDefault();
  let data = getFormFields(event.target);
  createPostObject.setTitle(data);
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
  createPostObject.createPost(data);
  $('#options').val("");
};

const onCreateSurvey = () => {
  let data = createPostObject.getPost();
  console.log("onCreateSurvey was called");
  console.log(data);
  api.createSurvey(data)
  .done(ui.createSurveySuccess)
  .fail(ui.createSurveyFailure);
};

const onDeleteSurvey = () => {
  let data = $('#survey-test-title').val();
  console.log(data);
  api.deleteSurvey(data)
  .done(ui.deleteSurveySuccess)
  .fail(ui.deleteSurveyError);
};

const addHandlers = () => {
  $('#make-survey').hide();
  $('#make-new-survey').on('click', onShowMakeSurvey);
  $('#survey-title-input').on('submit', onCreateTitle);
  $('#add-another-answer').on('click', onCreateOption);
  $('#survey-fillout').on('submit', onCreateQuestion);
  $('#complete-survey-creation').on('click', onCreateSurvey);
  $('#delete-a-survey').on('click', onDeleteSurvey);

};

module.exports = {
  addHandlers,
};
