'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
//const index = require('../index.js');


const onGetSurveys = () => {
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

// const onCompleteSurvey = () => {
//   api.completedSurvey()
//   .done(ui.completeSurveySuccess)
//   .fail(ui.completeSurveyFailure);
// };

const addHandlers = () => {
  $('#get-every-survey').show(onGetSurveys);
  $('.btn-warning').on('click', function(){
    let id = this.id;
    console.log(id);
    api.getASurvey(id)
    .done(ui.getASurveySuccess)
    .fail(ui.getASurveyFailure);
  });
  // $('#survey-taken').on(.....)
};

module.exports = {
  addHandlers,
};
