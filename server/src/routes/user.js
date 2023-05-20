import express from "express";
import { UserModel } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/get", async (req, res) => {
  try {
    const response = await UserModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const response = await UserModel.findById(req.params.id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.post("/register", async (req, res) => {
  const { mail, firstName, lastName, phoneNumber, password } = req.body;
  const user = await UserModel.findOne({ mail });

  if (user) {
    return res.json({ message: "User already exists!", success: false });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({
    mail,
    firstName,
    lastName,
    phoneNumber,
    password: hashedPassword,
  });
  await newUser.save();

  res.json({ message: "User registered succesfully!", success: true });
});

router.post("/login", async (req, res) => {
  const { mail, password } = req.body;
  const user = await UserModel.findOne({ mail });

  if (!user) {
    return res.json({ message: "User doesn't exist!", success: false });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.json({ message: "Password is incorrect!", success: false });
  }

  const token = jwt.sign({ id: user._id }, "secret");
  res.json({
    message: "User logged in succesfully!",
    token,
    userID: user._id,
    success: true,
  });
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const response = await UserModel.findByIdAndDelete(req.params.id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

export { router as userRouter };
