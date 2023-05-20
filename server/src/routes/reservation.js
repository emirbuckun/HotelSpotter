import express from "express";
import { ReservationModel } from "../models/Reservation.js";

const router = express.Router();

router.get("/get", async (req, res) => {
  try {
    const response = await ReservationModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const response = await ReservationModel.findById(req.params.id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.post("/insert", async (req, res) => {
  try {
    const amenity = new ReservationModel(req.body);
    const response = await amenity.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const response = await ReservationModel.findByIdAndUpdate(
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
    const response = await ReservationModel.findByIdAndDelete(req.params.id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

export { router as reservationRouter };
