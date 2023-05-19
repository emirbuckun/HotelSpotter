import express from "express";
import { QuestionModel } from "../models/Question.js";

const router = express.Router();

router.get("/getQuestions", async (req, res) => {
  try {
    const response = await QuestionModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
