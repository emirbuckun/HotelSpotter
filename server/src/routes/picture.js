import express from "express";
import { PictureModel } from "../models/Picture.js";

const router = express.Router();

router.get("/getPictures", async (req, res) => {
  try {
    const response = await PictureModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
