import express from "express";
import {
  insertHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotelList,
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
router.get("/getByID/:id", getHotel);

// GET HOTEL LIST
router.get("/getHotelList", getHotelList);

// GET ALL
router.get("/", getHotels);

export { router as hotelRouter };
