import express from "express";
import { RoomModel } from "../models/Room.js";

const router = express.Router();

router.get("/getRooms", async (req, res) => {
  try {
    const response = await RoomModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
