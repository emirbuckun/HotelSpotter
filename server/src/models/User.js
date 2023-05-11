import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  Username: { type: String, required: true, unique: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Mail: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  Password: { type: String, required: true },
  CreateDate: { type: Date, required: true },
  UpdateDate: { type: Date, required: false },
});

export const UserModel = mongoose.model("user", UserSchema);
