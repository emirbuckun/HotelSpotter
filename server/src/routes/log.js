import express from "express";
import { LogModel } from "../models/Log.js";

const router = express.Router();

router.get("/get", async (req, res) => {
  try {
    const response = await LogModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const response = await LogModel.findById(req.params.id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.post("/insert", async (req, res) => {
  try {
    const log = new LogModel(req.body);
    const response = await log.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const response = await LogModel.findByIdAndUpdate(req.params.id, req.body);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const response = await LogModel.findByIdAndDelete(req.params.id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

export { router as logRouter };

export const insertLog = (logModel) => {
  try {
    const log = new LogModel(logModel);
    const response = log.save();
    return "New log inserted successfully!";
  } catch (err) {
    return "Error exists in log insert operation, error: " + err;
  }
};
