import { LogModel } from "../models/Log.js";

export const insertLog = async (req, res, next) => {
  try {
    const newLog = new LogModel(req.body);
    const savedLog = await newLog.save();
    res.status(200).json(savedLog);
  } catch (err) {
    next(err);
  }
};

export const updateLog = async (req, res, next) => {
  try {
    const updatedLog = await LogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedLog);
  } catch (err) {
    next(err);
  }
};

export const deleteLog = async (req, res, next) => {
  try {
    const deletedLog = await LogModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedLog);
  } catch (err) {
    next(err);
  }
};

export const getLog = async (req, res, next) => {
  try {
    const log = await LogModel.findById(req.params.id);
    res.status(200).json(log);
  } catch (err) {
    next(err);
  }
};

export const getLogs = async (req, res, next) => {
  try {
    const logs = await LogModel.find();
    res.status(200).json(logs);
  } catch (err) {
    next(err);
  }
};
