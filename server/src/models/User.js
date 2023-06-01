import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  mail: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  userRole: [{ type: String, required: false }],
  createDate: { type: Date, default: Date.now() },
  updateDate: { type: Date, required: false },
});

export const UserModel = mongoose.model("users", UserSchema);
