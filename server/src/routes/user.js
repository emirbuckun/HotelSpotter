import express from "express";
import { UserModel } from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/getUsers", async (req, res) => {
  try {
    const response = await UserModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.post("/register", async (req, res) => {
  const { username, firstName, lastName, mail, phoneNumber, password } =
    req.body;
  const user = await UserModel.findOne({ username });

  if (user) {
    return res.json({ message: "User already exists!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({
    username,
    firstName,
    lastName,
    mail,
    phoneNumber,
    password: hashedPassword,
  });
  await newUser.save();

  res.json({ message: "User registered succesfully!" });
});

export { router as userRouter };
