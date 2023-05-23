import express from "express";
import {
  insertAnswer,
  updateAnswer,
  deleteAnswer,
  getAnswer,
  getAnswers,
} from "../controllers/answer.js";

const router = express.Router();

// INSERT
router.post("/", insertAnswer);

// UPDATE
router.put("/:id", updateAnswer);

// DELETE
router.delete("/:id", deleteAnswer);

// GET
router.get("/:id", getAnswer);

// GET ALL
router.get("/", getAnswers);

export { router as answerRouter };
