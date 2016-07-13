'use strict';

const app = require('../app.js');

const getSurveys = () => {
  return $.ajax({
    url: app.host + '/surveys',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getASurvey = (id) => {
  return $.ajax({
    url: app.host + '/surveys/' + id,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const completedSurvey = (data, survey_id) => {
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
  getSurveys,
  completedSurvey
};
