import Agent from "../models/Agent.js";
import Order from "../models/Order.js";

export const getAgent = async (req, res, next) => {
  try {
    const agentDetails = await Agent.findById(req.params.id);

    res.status(200).json(agentDetails);
  } catch (err) {
    next(err);
  }
};

export const viewPlacedOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      agentId: req.params.id,
    });

    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};
