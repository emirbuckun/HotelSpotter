import express from "express";
import {
  insertOwnership,
  updateOwnership,
  deleteOwnership,
  getOwnership,
  getOwnerships,
} from "../controllers/ownership.js";

const router = express.Router();

// INSERT
router.post("/", insertOwnership);

// UPDATE
router.put("/:id", updateOwnership);

// DELETE
router.delete("/:id", deleteOwnership);

// GET
router.get("/:id", getOwnership);

// GET ALL
router.get("/", getOwnerships);

export { router as amenityRouter };
