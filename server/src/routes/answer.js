import express from "express";
import { AnswerModel } from "../models/Answer.js";

const router = express.Router();

router.get("/getAnswers", async (req, res) => {
  try {
    const response = await AnswerModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
