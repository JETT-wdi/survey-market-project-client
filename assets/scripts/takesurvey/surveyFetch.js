
'use strict';

const app = require('../app.js');

const getASurvey = (id) => {
  return $.ajax({
    url: app.host + '/surveys/' + id,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  getASurvey,
};
