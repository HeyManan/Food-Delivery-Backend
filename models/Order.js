import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema({
  agentId: {
    type: Schema.Types.ObjectId,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "new",
  },
  ratings: {
    type: [Array],
  },
  agentRatings: {
    type: Number,
  },
  food: {
    type: [Object],
    required: true,
  },
});

export default mongoose.model("Order", orderSchema);
