import express from "express";
import { OwnershipModel } from "../models/Ownership.js";

const router = express.Router();

router.get("/getOwnerships", async (req, res) => {
  try {
    const response = await OwnershipModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
