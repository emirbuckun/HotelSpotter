import express from "express";
import {
  insertReview,
  updateReview,
  deleteReview,
  getReview,
  getReviews,
} from "../controllers/review.js";

const router = express.Router();

// INSERT
router.post("/", insertReview);

// UPDATE
router.put("/:id", updateReview);

// DELETE
router.delete("/:id", deleteReview);

// GET
router.get("/:id", getReview);

// GET ALL
router.get("/", getReviews);

export { router as reviewRouter };
