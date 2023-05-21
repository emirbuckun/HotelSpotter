import express from "express";
import {
  insertRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} from "../controllers/room.js";

const router = express.Router();

// INSERT
router.post("/", insertRoom);

// UPDATE
router.put("/:id", updateRoom);

// DELETE
router.delete("/:id", deleteRoom);

// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getRooms);

export { router as amenityRouter };
