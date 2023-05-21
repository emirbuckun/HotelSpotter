import { PictureModel } from "../models/Picture.js";

export const insertPicture = async (req, res, next) => {
  try {
    const newPicture = new PictureModel(req.body);
    const savedPicture = await newPicture.save();
    res.status(200).json(savedPicture);
  } catch (err) {
    next(err);
  }
};

export const updatePicture = async (req, res, next) => {
  try {
    const updatedPicture = await PictureModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedPicture);
  } catch (err) {
    next(err);
  }
};

export const deletePicture = async (req, res, next) => {
  try {
    const deletedPicture = await PictureModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPicture);
  } catch (err) {
    next(err);
  }
};

export const getPicture = async (req, res, next) => {
  try {
    const picture = await PictureModel.findById(req.params.id);
    res.status(200).json(picture);
  } catch (err) {
    next(err);
  }
};

export const getPictures = async (req, res, next) => {
  try {
    const pictures = await PictureModel.find();
    res.status(200).json(pictures);
  } catch (err) {
    next(err);
  }
};
