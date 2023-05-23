import { AnswerModel } from "../models/Answer.js";

export const insertAnswer = async (req, res, next) => {
  try {
    const newAnswer = new AnswerModel(req.body);
    const savedAnswer = await newAnswer.save();
    res.status(200).json(savedAnswer);
  } catch (err) {
    next(err);
  }
};

export const updateAnswer = async (req, res, next) => {
  try {
    const updatedAnswer = await AnswerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedAnswer);
  } catch (err) {
    next(err);
  }
};

export const deleteAnswer = async (req, res, next) => {
  try {
    const deletedAnswer = await AnswerModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedAnswer);
  } catch (err) {
    next(err);
  }
};

export const getAnswer = async (req, res, next) => {
  try {
    const answer = await AnswerModel.findById(req.params.id);
    res.status(200).json(answer);
  } catch (err) {
    next(err);
  }
};

export const getAnswers = async (req, res, next) => {
  try {
    const answers = await AnswerModel.find();
    res.status(200).json(answers);
  } catch (err) {
    next(err);
  }
};
