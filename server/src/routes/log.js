import express from "express";
import {
  insertLog,
  updateLog,
  deleteLog,
  getLog,
  getLogs,
} from "../controllers/log.js";

const router = express.Router();

// INSERT
router.post("/", insertLog);

// UPDATE
router.put("/:id", updateLog);

// DELETE
router.delete("/:id", deleteLog);

// GET
router.get("/:id", getLog);

// GET ALL
router.get("/", getLogs);

export { router as amenityRouter };
