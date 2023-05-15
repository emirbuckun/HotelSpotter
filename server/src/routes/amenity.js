import express from "express";
import { AmenityModel } from "../models/Amenity.js";

const router = express.Router();

router.get("/getAmenities", async (req, res) => {
  try {
    const response = await AmenityModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
