import express from "express";
import {
  insertAmenity,
  updateAmenity,
  deleteAmenity,
  getAmenity,
  getAmenities,
} from "../controllers/amenity.js";

const router = express.Router();

// INSERT
router.post("/", insertAmenity);

// UPDATE
router.put("/:id", updateAmenity);

// DELETE
router.delete("/:id", deleteAmenity);

// GET
router.get("/:id", getAmenity);

// GET ALL
router.get("/", getAmenities);

export { router as amenityRouter };
