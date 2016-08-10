'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');
const takeSurvey = require('../takesurvey/ui.js');
const api = require('./api');
const ui = require('./ui');
//const index = require('../index.js');
const createPostObject = require('./create-post-object.js');

const onShowMakeSurvey = () => {
  $('#make-survey').show();
  $('#survey-fillout').hide();
};

const onCreateTitle = (event) =>{
  event.preventDefault();
  let data = getFormFields(event.target);
  let surveyInfo = takeSurvey.backDataSurvey();
  for(let i=0; i<surveyInfo.surveys.length; i++) {
    if (surveyInfo.surveys[i].title === data.surveys.title) {
      $('#survey-title-error').show();
      $('#survey-test-title').val("");
      return ;
    }
  }
  $('#survey-title-error').hide();
  createPostObject.setTitle(data);
  $('#survey-test-title').val("");
  $('#survey-fillout').show();
};

let optionCount = 3;
const onCreateOption = () => {
  let optionNumber = optionCount.toString();
  $( "#options" ).append( '<input class="answer-input" type="text" name="surveys[questions][answers][' +optionNumber+ '][text]" placeholder="Answer"><br>');
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

// const onDeleteSurvey = () => {
//   let data = $('#survey-test-title').val();
//   console.log(data);
//   api.deleteSurvey(data)
//   .done(ui.deleteSurveySuccess)
//   .fail(ui.deleteSurveyError);
// };

const addHandlers = () => {
  $('#make-survey').hide();
  $('#make-new-survey').on('click', onShowMakeSurvey);
  $('#survey-title-input').on('submit', onCreateTitle);
  $('#add-another-answer').on('click', onCreateOption);
  $('#survey-fillout').on('submit', onCreateQuestion);
  $('#complete-survey-creation').on('click', onCreateSurvey);
  //$('#delete-a-survey').on('click', onDeleteSurvey);

};

module.exports = {
  addHandlers,
};
