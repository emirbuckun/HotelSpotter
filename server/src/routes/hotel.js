import express from "express";
import {
  insertHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotel.js";

const router = express.Router();

// INSERT
router.post("/", insertHotel);

// UPDATE
router.put("/:id", updateHotel);

// DELETE
router.delete("/:id", deleteHotel);

// GET
router.get("/:id", getHotel);

// GET ALL
router.get("/", getHotels);

export { router as amenityRouter };
