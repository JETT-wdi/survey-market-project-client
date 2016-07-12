'use strict';

let survey = {
  "survey": {
    "title": "temporary",
    "questions": [],
  }
}; //don't let this reset to blank every time

const createPost = (data) => {
  console.log(data);
  console.log(survey.questions);
  // survey.questions.push(data);
  // console.log(survey);
  // return survey;
};

const getPost = () => {
  return survey;
};

module.exports = {
  createPost,
  getPost
};
