import mongoose, { Schema } from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  ratings: {
    type: Number,
    default: 0,
  },
  address: {
    type: String,
    required: true,
  },
  pin: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Restaurant", restaurantSchema);
