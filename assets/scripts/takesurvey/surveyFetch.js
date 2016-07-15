'use strict';

const app = require('../app.js');

const getASurvey = (id) => {
  if(app.user === undefined) {
    $('#error-message').show();
  }
  return $.ajax({
    url: app.host + '/surveys/' + id,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getSurveysAgain = () => {
  return $.ajax({
    url: app.host + '/surveys',
    method: "GET",
  });
};

const sendSurveyVotes = (survey_id, data) => {
  return $.ajax({
    url: app.host + '/surveys/' + survey_id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};

module.exports = {
  getASurvey,
  getSurveysAgain,
  sendSurveyVotes,
};
