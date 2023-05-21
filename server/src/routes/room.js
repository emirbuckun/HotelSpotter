import express from "express";
import { RoomModel } from "../models/Room.js";

const router = express.Router();

router.get("/get", async (req, res) => {
  try {
    const response = await RoomModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const response = await RoomModel.findById(req.params.id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.post("/insert", async (req, res) => {
  try {
    const room = new RoomModel(req.body);
    const response = await room.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const response = await RoomModel.findByIdAndUpdate(req.params.id, req.body);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const response = await RoomModel.findByIdAndDelete(req.params.id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

export { router as roomRouter };
