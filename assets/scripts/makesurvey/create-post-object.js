'use strict';

let surveyObject = {
  "survey": {
    "title": "temporary",
    "questions": [],
  }
}; //don't let this reset to blank every time

const createPost = (data) => {
  surveyObject.survey.questions.push(data.surveys.questions);
  return surveyObject;
};

const getPost = () => {
  return surveyObject;
};

module.exports = {
  createPost,
  getPost
};
