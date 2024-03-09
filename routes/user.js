import express from "express";
import {
  getActiveRestaurant,
  placeOrder,
  rateAgent,
  rateOrder,
  viewOrders,
} from "../controllers/User.js";
import { viewOrder } from "../controllers/restaurant.js";

const router = express.Router();

router.get("/:id", getActiveRestaurant);

router.get("/:id/orders", viewOrders);

router.get("/:id/orders/:oid", viewOrder);

router.put("/:id/orders/:oid/rateFood/:fid", rateOrder);

router.put("/:id/orders/:oid/rateAgent", rateAgent);

router.post("/:id", placeOrder);

export default router;
