import express from "express";
import {
  addRestaurant,
  createAgent,
  getAllAgents,
  getAllRestaurant,
} from "../controllers/admin.js";
import { getActiveRestaurant } from "../controllers/User.js";

const router = express.Router();

router.get("/restaurants", getAllRestaurant);

router.post("/restaurants", addRestaurant);

router.post("/agents", createAgent);

router.get("/agents", getAllAgents);

router.get("/restaurants/active", getActiveRestaurant);

export default router;
