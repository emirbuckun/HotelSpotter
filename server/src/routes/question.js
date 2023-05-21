import express from "express";
import {
  insertQuestion,
  updateQuestion,
  deleteQuestion,
  getQuestion,
  getQuestions,
} from "../controllers/question.js";

const router = express.Router();

// INSERT
router.post("/", insertQuestion);

// UPDATE
router.put("/:id", updateQuestion);

// DELETE
router.delete("/:id", deleteQuestion);

// GET
router.get("/:id", getQuestion);

// GET ALL
router.get("/", getQuestions);

export { router as amenityRouter };
