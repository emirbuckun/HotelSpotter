import { LocationModel } from "../models/Location.js";

export const insertLocation = async (req, res, next) => {
  try {
    const newLocation = new LocationModel(req.body);
    const savedLocation = await newLocation.save();
    res.status(200).json(savedLocation);
  } catch (err) {
    next(err);
  }
};

export const updateLocation = async (req, res, next) => {
  try {
    const updatedLocation = await LocationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedLocation);
  } catch (err) {
    next(err);
  }
};

export const deleteLocation = async (req, res, next) => {
  try {
    const deletedLocation = await LocationModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedLocation);
  } catch (err) {
    next(err);
  }
};

export const getLocation = async (req, res, next) => {
  try {
    const location = await LocationModel.findById(req.params.id);
    res.status(200).json(location);
  } catch (err) {
    next(err);
  }
};

export const getLocations = async (req, res, next) => {
  try {
    const locations = await LocationModel.find();
    res.status(200).json(locations);
  } catch (err) {
    next(err);
  }
};
