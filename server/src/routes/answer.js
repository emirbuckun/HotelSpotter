import express from "express";
import { AnswerModel } from "../models/Answer.js";

const router = express.Router();

router.get("/get", async (req, res) => {
  try {
    const response = await AnswerModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const response = await AnswerModel.findById(req.params.id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.post("/insert", async (req, res) => {
  try {
    const amenity = new AnswerModel(req.body);
    const response = await amenity.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const response = await AnswerModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const response = await AnswerModel.findByIdAndDelete(req.params.id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

export { router as answerRouter };
