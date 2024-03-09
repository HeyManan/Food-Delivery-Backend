import express from "express";
import { getAgent, viewPlacedOrders } from "../controllers/agent.js";
import { changeOrderStatus, viewOrder } from "../controllers/restaurant.js";

const router = express.Router();

router.get("/:id", getAgent);

router.get("/:id/orders", viewPlacedOrders);

router.get("/:id/orders/:oid", viewOrder);

router.put("/:id/orders/:oid/changeStatus", changeOrderStatus);

export default router;
