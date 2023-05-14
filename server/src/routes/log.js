import express from "express";
import { LogModel } from "../models/Log.js";

const router = express.Router();

router.get("/getLogs", async (req, res) => {
  try {
    const response = await LogModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
