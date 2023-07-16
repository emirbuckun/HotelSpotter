import express from "express";
import {
  insertHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotelList,
  filterHotels,
  getHotels,
  getAllHotels,
  getHotelDetails,
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

// GET HOTEL DETAILS
router.get("/getHotelDetails/:id", getHotelDetails);

// GET HOTEL LIST
router.get("/getHotelList", getHotelList);

// FILTER HOTEL LIST
router.post("/filterHotels", filterHotels);

// GET HOTELS WITH PAGINATION
router.get("/", getHotels);

// GET ALL HOTELS
router.get("/getAllHotels", getAllHotels);

export { router as hotelRouter };
