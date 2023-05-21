import express from "express";
import {
  insertReservation,
  updateReservation,
  deleteReservation,
  getReservation,
  getReservations,
} from "../controllers/reservation.js";

const router = express.Router();

// INSERT
router.post("/", insertReservation);

// UPDATE
router.put("/:id", updateReservation);

// DELETE
router.delete("/:id", deleteReservation);

// GET
router.get("/:id", getReservation);

// GET ALL
router.get("/", getReservations);

export { router as amenityRouter };
