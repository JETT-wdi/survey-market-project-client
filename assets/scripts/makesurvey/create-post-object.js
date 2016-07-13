'use strict';

let surveyObject = {
  "survey": {
    "title": "temporary",
    "questions": [],
  }
}; //don't let this reset to blank every time

const createPost = (data) => {
  surveyObject.survey.questions.push(data.surveys.questions);
  console.log("CreatePost was called");
  console.log(surveyObject);
  return surveyObject;
};

const getPost = () => {
  console.log("getPost was called");
  console.log(surveyObject);
  return surveyObject;
};

module.exports = {
  createPost,
  getPost
};
