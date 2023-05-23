import { QuestionModel } from "../models/Question.js";

export const insertQuestion = async (req, res, next) => {
  try {
    const newQuestion = new QuestionModel(req.body);
    const savedQuestion = await newQuestion.save();
    res.status(200).json(savedQuestion);
  } catch (err) {
    next(err);
  }
};

export const updateQuestion = async (req, res, next) => {
  try {
    const updatedQuestion = await QuestionModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedQuestion);
  } catch (err) {
    next(err);
  }
};

export const deleteQuestion = async (req, res, next) => {
  try {
    const deletedQuestion = await QuestionModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedQuestion);
  } catch (err) {
    next(err);
  }
};

export const getQuestion = async (req, res, next) => {
  try {
    const question = await QuestionModel.findById(req.params.id);
    res.status(200).json(question);
  } catch (err) {
    next(err);
  }
};

export const getQuestions = async (req, res, next) => {
  try {
    const questions = await QuestionModel.find();
    res.status(200).json(questions);
  } catch (err) {
    next(err);
  }
};
