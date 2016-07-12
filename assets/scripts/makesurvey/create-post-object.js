'use strict';

let survey = {
  "survey": {
    "title": "temporary",
    "questions": [],
  }
}; //don't let this reset to blank every time

const createPost = (data) => {
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
