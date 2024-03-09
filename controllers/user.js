import Order from "../models/Order.js";
import Restaurant from "../models/Restaurant.js";
import Food from "../models/Food.js";
import Agent from "../models/Agent.js";

export const getActiveRestaurant = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find({ status: true });
    res.status(200).json(restaurants);
  } catch (err) {
    next(err);
  }
};

export const viewOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      userId: req.params.id,
    });

    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

export const placeOrder = async (req, res, next) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();

    res.status(200).send("Order Placed.");
  } catch (err) {
    next(err);
  }
};

export const rateOrder = async (req, res, next) => {
  try {
    const food = await Food.findById(req.params.fid);

    let foodRating =
      ((food.ratings ? food.ratings : req.body.star) + req.body.star) / 2;

    await Food.findByIdAndUpdate(req.params.fid, {
      $set: { ratings: foodRating },
    });

    const rating = new Array();
    rating.push(req.params.fid);
    rating.push(req.body.star);

    await Order.findByIdAndUpdate(req.params.oid, {
      $push: { ratings: rating },
    });

    res.status(200).send("food rated");
  } catch (err) {
    next(err);
  }
};

export const rateAgent = async (req, res, next) => {
  try {
    await Order.findByIdAndUpdate(req.params.oid, {
      $set: { agentRatings: req.body.star },
    });

    let agent = await Agent.findById(req.body.agentId);

    let updatedRatings =
      ((agent.ratings ? agent.ratings : req.body.star) + req.body.star) / 2;

    await Agent.findByIdAndUpdate(req.body.agentId, {
      $set: { ratings: updatedRatings },
    });

    res.status(200).send("Rated agent successfully");
  } catch (err) {
    next(err);
  }
};
