import mongoose from "mongoose";

const UserRoleSchema = new mongoose.Schema({
  UserID: { type: Number, required: true },
  Role: { type: String, required: true },
});

export const UserRoleModel = mongoose.model("userRole", UserRoleSchema);
