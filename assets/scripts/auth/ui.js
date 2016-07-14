'use strict';

const app = require('../app.js');


const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
  $('#make-delete-sign-in').show();
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
  $('#make-delete-sign-in').hide();
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess
};
