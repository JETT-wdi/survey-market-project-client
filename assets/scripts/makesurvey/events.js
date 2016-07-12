'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
// const index = require('../index.js');
const createPostObject = require('./create-post-object.js');

const onCreateOption = () => {
  $( "#survey-fillout" ).append( '<input type="text" name="survey[questions][answers][option]" placeholder="Answer"><br>');
};

const onCreateQuestion = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  createPostObject.createPost(data);
};

const onCreateSurvey = () => {
  let data = createPostObject.getPost();
  api.createSurvey(data)
  .done(ui.createSurveySuccess)
  .fail(ui.createSurveyFailure);
};



const addHandlers = () => {
  $('#add-another-answer').on('click', onCreateOption);
  $('#survey-fillout').on('submit', onCreateQuestion);
  $('#complete-survey-creation').on('click', onCreateSurvey);
};

module.exports = {
  addHandlers,
};
