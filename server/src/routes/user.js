import express from "express";
import {
  insertUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";

const router = express.Router();

// INSERT
router.post("/", insertUser);

// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

// GET
router.get("/:id", getUser);

// GET ALL
router.get("/", getUsers);

export { router as amenityRouter };
