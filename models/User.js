import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: [Object],
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("User", UserSchema);
