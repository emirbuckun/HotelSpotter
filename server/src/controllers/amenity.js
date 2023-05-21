import { AmenityModel } from "../models/Amenity.js";

export const createAmenity = async (req, res, next) => {
  try {
    const newAmenity = new AmenityModel(req.body);
    const savedAmenity = await newAmenity.save();
    res.status(200).json(savedAmenity);
  } catch (err) {
    next(err);
  }
};

export const updateAmenity = async (req, res, next) => {
  try {
    const updatedAmenity = await AmenityModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedAmenity);
  } catch (err) {
    next(err);
  }
};

export const deleteAmenity = async (req, res, next) => {
  try {
    const deletedAmenity = await AmenityModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedAmenity);
  } catch (err) {
    next(err);
  }
};

export const getAmenity = async (req, res, next) => {
  try {
    const amenity = await AmenityModel.findById(req.params.id);
    res.status(200).json(amenity);
  } catch (err) {
    next(err);
  }
};

export const getAmenities = async (req, res, next) => {
  try {
    const amenities = await AmenityModel.find();
    res.status(200).json(amenities);
  } catch (err) {
    next(err);
  }
};
