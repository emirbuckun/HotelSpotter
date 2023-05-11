import mongoose from "mongoose";

const UserRoleSchema = new mongoose.Schema({
  UserID: { type: mongoose.Schema.Types.ObjectId, required: true },
  Role: { type: String, required: true },
});

export const UserRoleModel = mongoose.model("userRole", UserRoleSchema);
