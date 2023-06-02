import e from "express";
import { ReviewModel } from "../models/Review.js";

export const insertReview = async (req, res, next) => {
  try {
    const newReview = new ReviewModel(req.body);
    const savedReview = await newReview.save();
    res.status(200).json(savedReview);
  } catch (err) {
    next(err);
  }
};

export const updateReview = async (req, res, next) => {
  try {
    const updatedReview = await ReviewModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedReview);
  } catch (err) {
    next(err);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const deletedReview = await ReviewModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedReview);
  } catch (err) {
    next(err);
  }
};

export const getReview = async (req, res, next) => {
  try {
    const review = await ReviewModel.findById(req.params.id);
    res.status(200).json(review);
  } catch (err) {
    next(err);
  }
};

export const getByReservationID = async (req, res, next) => {
  try {
    const review = await ReviewModel.findOne({ reservationID: req.params.id });
    res.status(200).json(review);
  } catch (err) {
    next(err);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await ReviewModel.find();
    res.status(200).json(reviews);
  } catch (err) {
    next(err);
  }
};
