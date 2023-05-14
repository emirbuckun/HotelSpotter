import express from "express";
import { ReservationModel } from "../models/Reservation.js";

const router = express.Router();

router.get("/getReservations", async (req, res) => {
  try {
    const response = await ReservationModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
