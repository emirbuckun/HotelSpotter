import express from "express";
import { OwnershipModel } from "../models/Ownership.js";

const router = express.Router();

router.get("/get", async (req, res) => {
  try {
    const response = await OwnershipModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const response = await OwnershipModel.findById(req.params.id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.post("/insert", async (req, res) => {
  try {
    const log = new OwnershipModel(req.body);
    const response = await log.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const response = await OwnershipModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const response = await OwnershipModel.findByIdAndDelete(req.params.id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

export { router as ownershipRouter };
