import express from "express";
import {
  insertLocation,
  updateLocation,
  deleteLocation,
  getLocation,
  getLocationByHotelID,
  getLocations,
} from "../controllers/location.js";

const router = express.Router();

// INSERT
router.post("/", insertLocation);

// UPDATE
router.put("/:id", updateLocation);

// DELETE
router.delete("/:id", deleteLocation);

// GET
router.get("/:id", getLocation);

// GET BY HOTEL ID
router.get("/getByHotelID/:id", getLocationByHotelID);

// GET ALL
router.get("/", getLocations);

export { router as locationRouter };
