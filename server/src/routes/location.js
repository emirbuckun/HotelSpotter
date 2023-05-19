import express from "express";
import { LocationModel } from "../models/Location.js";

const router = express.Router();

router.get("/getLocations", async (req, res) => {
  try {
    const response = await LocationModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
