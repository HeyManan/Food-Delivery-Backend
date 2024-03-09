import mongoose from "mongoose";

const agentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  ratings: {
    type: Number,
  },
});

export default mongoose.model("Agent", agentSchema);
