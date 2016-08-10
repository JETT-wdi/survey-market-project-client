'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
const app = require('../app.js');
//const index = require('../index.js');


const onGetSurveys = () => {
  $('#get-every-survey').html('');
  api.getSurveys()
  .done(ui.getSurveySuccess)
  .fail(ui.getSurveyFailure);
};

// const onGetASurvey = (event) => {
//   let id = this.id;
//   console.log(id);
//   api.getASurvey(id)
//   .done(ui.getASurveySuccess)
//   .fail(ui.getASurveyFailure);
// };

const showDeleteSurveys = () => {
  let data = ui.backDataSurvey();
  let arr = data.surveys;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]._owner === app.user._id ) {
      console.log(arr[i]);
      let deleteASurveyListing = require('../templates/deleteASurvey.handlebars');
      $('#get-every-survey').append(deleteASurveyListing(arr[i]));
    }
  }
  $('.deleteThis').on('click', function(){
    let id = this.id;
    console.log(id);
     api.deleteSurvey(id)
     .done(ui.deleteSurveySuccess)
     .fail(ui.deleteSurveyError);
  });
};

// const onCompleteSurvey = () => {
//   api.completedSurvey()
//   .done(ui.completeSurveySuccess)
//   .fail(ui.completeSurveyFailure);
// };

const addHandlers = () => {
  $('#get-every-survey').show(onGetSurveys);
  $('#get-all').on('click', onGetSurveys);
  $('#delete-a-survey').on('click', showDeleteSurveys);
};

module.exports = {
  addHandlers,
  onGetSurveys
};
