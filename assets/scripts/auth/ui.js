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

const signUpSuccess = (data) => {
$('#signin-email').val($('#signup-email').val());
$('#signin-password').val($('#signup-password').val());
$('#sign-in').submit();
$('#signup-email, #signup-password, #signup_passwordconf, #signin-email, #signin-password').val("");
$('.modal').modal('hide');
console.log(data);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
  $('#make-delete-sign-in').show();
  $('#error-message').hide();
  $('.modal').modal('hide');
  $('#signin-email, #signin-password').val("");
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = undefined;
  $('#make-delete-sign-in').hide();
  $('.modal').modal('show');
  $('#take-a-survey').empty();
};

const changePasswordSuccess = () => {
  $('.modal').modal('hide');
  $('#password-old, #password-new').val("");
};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};
