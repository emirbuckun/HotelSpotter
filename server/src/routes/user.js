import express from "express";
import { UserModel } from "../models/User.js";

const router = express.Router();

router.get("/getUsers", async (req, res) => {
  try {
    const response = await UserModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
