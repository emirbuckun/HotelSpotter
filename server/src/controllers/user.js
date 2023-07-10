import { UserModel } from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ mail: req.body.mail });
    if (user) return next(createError(400, "User already exists."));

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new UserModel({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send({ message: "User successfully registered." });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ mail: req.body.mail });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(400, "Password is incorrect."));

    const token = jwt.sign({ id: user._id }, "secret");

    res.status(200).json({
      token,
      userID: user._id,
      message: "User successfully logged in.",
    });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const { page, limit, sort } = req.query;

    const sortArgs = sort ? sort.split(",") : ["_id", "asc"];
    const sortField = sortArgs[0];
    const sortOrder = sortArgs[1] == "desc" ? -1 : 1;

    const query = await UserModel.aggregate()
      .sort({ [sortField]: parseInt(sortOrder) })
      .facet({
        count: [{ $count: "total" }],
        paginated: [{ $skip: page * limit }, { $limit: parseInt(limit) }],
      });

    const result = query[0];
    const list = result.paginated;
    const total = result.count[0] != null ? result.count[0].total : 0;

    res.status(200).json({ total, list });
  } catch (err) {
    next(err);
  }
};
