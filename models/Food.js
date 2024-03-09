import mongoose, { Schema } from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  ratings: {
    type: Number,
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  veg: {
    type: Boolean,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Food", foodSchema);
