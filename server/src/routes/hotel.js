import express from "express";
import { HotelModel } from "../models/Hotel.js";

const router = express.Router();

router.get("/getHotels", async (req, res) => {
  try {
    const response = await HotelModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
