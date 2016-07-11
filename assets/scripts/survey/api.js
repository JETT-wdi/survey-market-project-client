'use strict';

const app = require('../app.js');

const createSurvey = (data) => {
  return $.ajax({
  url: app.host + '/survey',
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

const deleteSurvey = (survey_id) => {
  return $.ajax({
    url: app.host + '/survey/' + survey_id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
      },
});
};

module.exports = {
  createSurvey,
  deleteSurvey,
  updateSurvey
}
