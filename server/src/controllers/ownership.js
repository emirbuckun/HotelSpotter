import { OwnershipModel } from "../models/Ownership.js";

export const insertOwnership = async (req, res, next) => {
  try {
    const newOwnership = new OwnershipModel(req.body);
    const savedOwnership = await newOwnership.save();
    res.status(200).json(savedOwnership);
  } catch (err) {
    next(err);
  }
};

export const updateOwnership = async (req, res, next) => {
  try {
    const updatedOwnership = await OwnershipModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedOwnership);
  } catch (err) {
    next(err);
  }
};

export const deleteOwnership = async (req, res, next) => {
  try {
    const deletedOwnership = await OwnershipModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedOwnership);
  } catch (err) {
    next(err);
  }
};

export const getOwnership = async (req, res, next) => {
  try {
    const ownership = await OwnershipModel.findById(req.params.id);
    res.status(200).json(ownership);
  } catch (err) {
    next(err);
  }
};

export const getOwnerships = async (req, res, next) => {
  try {
    const ownerships = await OwnershipModel.find();
    res.status(200).json(ownerships);
  } catch (err) {
    next(err);
  }
};
