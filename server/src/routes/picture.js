import express from "express";
import {
  insertPicture,
  updatePicture,
  deletePicture,
  getPicture,
  getPictures,
} from "../controllers/picture.js";

const router = express.Router();

// INSERT
router.post("/", insertPicture);

// UPDATE
router.put("/:id", updatePicture);

// DELETE
router.delete("/:id", deletePicture);

// GET
router.get("/:id", getPicture);

// GET ALL
router.get("/", getPictures);

export { router as amenityRouter };
