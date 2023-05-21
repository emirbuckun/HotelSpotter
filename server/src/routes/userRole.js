import express from "express";
import {
  insertUserRole,
  updateUserRole,
  deleteUserRole,
  getUserRole,
  getUserRoles,
} from "../controllers/userRole.js";

const router = express.Router();

// INSERT
router.post("/", insertUserRole);

// UPDATE
router.put("/:id", updateUserRole);

// DELETE
router.delete("/:id", deleteUserRole);

// GET
router.get("/:id", getUserRole);

// GET ALL
router.get("/", getUserRoles);

export { router as userRoleRouter };
