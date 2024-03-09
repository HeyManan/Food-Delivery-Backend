import express from "express";
import {
  getRestaurant,
  updateDetails,
  viewPlacedOrders,
  viewOrder,
  changeOrderStatus,
  assignAgent,
  addFood,
  updateFood,
  deleteFood,
  getFood,
  getAllFood,
} from "../controllers/restaurant.js";

const router = express.Router();

router.get("/:id/orders/:oid", viewOrder);

router.put("/:id/orders/:oid/changeStatus", changeOrderStatus);

router.put("/:id/orders/:oid/assignAgent", assignAgent);

router.get("/:id/orders", viewPlacedOrders);

router.post("/:id/food", addFood);

router.get("/:id/food", getAllFood);

router.put("/:id/food/:fid", updateFood);

router.delete("/:id/food/:fid", deleteFood);

router.get("/:id/food/:fid", getFood);

router.get("/:id", getRestaurant);

router.put("/:id", updateDetails);

export default router;
