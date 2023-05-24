import { UserRoleModel } from "../models/UserRole.js";

export const insertUserRole = async (req, res, next) => {
  try {
    const newUserRole = new UserRoleModel(req.body);
    const savedUserRole = await newUserRole.save();
    res.status(200).json(savedUserRole);
  } catch (err) {
    next(err);
  }
};

export const updateUserRole = async (req, res, next) => {
  try {
    const updatedUserRole = await UserRoleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedUserRole);
  } catch (err) {
    next(err);
  }
};

export const deleteUserRole = async (req, res, next) => {
  try {
    const deletedUserRole = await UserRoleModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedUserRole);
  } catch (err) {
    next(err);
  }
};

export const getUserRole = async (req, res, next) => {
  try {
    const userRole = await UserRoleModel.findById(req.params.id);
    res.status(200).json(userRole);
  } catch (err) {
    next(err);
  }
};

export const getUserRoles = async (req, res, next) => {
  try {
    const userRoles = await UserRoleModel.find();
    res.status(200).json(userRoles);
  } catch (err) {
    next(err);
  }
};
