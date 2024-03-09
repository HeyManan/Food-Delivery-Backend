import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/auth.js";
import restaurantRoute from "./routes/restaurant.js";
import userRoute from "./routes/user.js";
import agentRoute from "./routes/agent.js";
import adminRoute from "./routes/admin.js";

const app = express();
dotenv.config();

let corOptions = {
  // origin: "https://localhost:8800",
};

const connect = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Connection Unsuccessful.");
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);
app.use("/restaurants", restaurantRoute);
app.use("/users", userRoute);
app.use("/agents", agentRoute);
app.use("/admin", adminRoute);

//error handler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something Went Wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected");
});
