import mongoose from "mongoose";

const UserRoleSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  role: { type: String, required: true },
});

export const UserRoleModel = mongoose.model("userRoles", UserRoleSchema);
