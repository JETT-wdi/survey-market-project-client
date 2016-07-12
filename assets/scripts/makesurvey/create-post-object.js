'use strict';

let survey = {
  "survey": {
    "title": "temporary",
    "questions": [],
  }
}; //don't let this reset to blank every time

const createPost = (data) => {
  console.log(data.surveys.questions);
  survey.survey.questions.push(data.surveys.questions);
  return survey;
};

const getPost = () => {
  return survey;
};

module.exports = {
  createPost,
  getPost
};
