import express from "express";
import { UserRoleModel } from "../models/UserRole.js";

const router = express.Router();

router.get("/getUserRoles", async (req, res) => {
  try {
    const response = await UserRoleModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});
