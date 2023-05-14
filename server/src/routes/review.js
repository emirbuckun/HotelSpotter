import express from "express";
import { ReviewModel } from "../models/Review.js";

const router = express.Router();

router.get("/getReviews", async (req, res) => {
  try {
    const response = await ReviewModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
