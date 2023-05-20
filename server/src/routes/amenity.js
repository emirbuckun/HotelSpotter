import express from "express";
import { AmenityModel } from "../models/Amenity.js";

const router = express.Router();

router.get("/get", async (req, res) => {
  try {
    const response = await AmenityModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const response = await AmenityModel.findById(req.params.id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.post("/insert", async (req, res) => {
  try {
    const amenity = new AmenityModel(req.body);
    const response = await amenity.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const hotelID = req.body.hotelID;
  const amenity = req.body.amenity;

  try {
    const response = await AmenityModel.findByIdAndUpdate(
      id,
      { hotelID: hotelID, amenity: amenity },
      { new: true }
    );
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const response = await AmenityModel.findByIdAndDelete(req.params.id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

export { router as amenityRouter };
