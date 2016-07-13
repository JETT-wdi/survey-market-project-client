'use strict';

const app = require('../app.js');

const createSurvey = (data) => {
  return $.ajax({
  url: app.host + '/surveys',
  method: "POST",
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
  data: data
});
};

const updateSurvey = (data, survey_id) => {
  return $.ajax({
    url: app.host + '/surveys/' + survey_id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};

//delete function need to test, because we don't know what is app.user.survey.id is.
const deleteSurvey = (data) => {
  if (data === app.user.survey.title){
    return $.ajax({
      url: app.host + '/surveys/' + app.user.survey.id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + app.user.token,
        },
   });
  }
};



module.exports = {
  createSurvey,
  deleteSurvey,
  updateSurvey
};
