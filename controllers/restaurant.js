import Restaurant from "../models/Restaurant.js";
import Food from "../models/Food.js";
import Order from "../models/Order.js";
import Agent from "../models/Agent.js";

export const addFood = async (req, res, next) => {
  let restaurantId = req.params.id;
  const newFood = new Food({ restaurantId, ...req.body });
  try {
    const savedFood = await newFood.save();
    res.status(200).json(savedFood);
  } catch (err) {
    next(err);
  }
};

export const updateFood = async (req, res, next) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.fid,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedFood);
  } catch (err) {
    next(err);
  }
};

export const deleteFood = async (req, res, next) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.fid);
    res.status(200).json("Item deleted");
  } catch (err) {
    next(err);
  }
};

export const getFood = async (req, res, next) => {
  try {
    const food = await Food.findById(req.params.fid);
    res.status(200).json(food);
  } catch (err) {
    next(err);
  }
};

export const getAllFood = async (req, res, next) => {
  try {
    const foods = await Food.find({ restaurantId: req.params.id });
    res.status(200).json(foods);
  } catch (err) {
    next(err);
  }
};

export const updateDetails = async (req, res, next) => {
  try {
    const updatedDetails = await Restaurant.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedDetails);
  } catch (err) {
    next(err);
  }
};

export const getRestaurant = async (req, res, next) => {
  try {
    const restDetails = await Restaurant.findById(req.params.id);
    const food = await Food.find({ restaurantId: req.params.id });

    const restaurant = { ...restDetails, ...food };
    res.status(200).json(restaurant);
  } catch (err) {
    next(err);
  }
};

export const viewPlacedOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      restaurantId: req.params.id,
      status: "new",
    });

    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

export const viewOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.oid);

    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

export const changeOrderStatus = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.oid, {
      $set: { status: req.body.status },
    });

    if (req.body.status == "delivered") {
      const agentId = await Order.findById(req.params.oid);

      // console.log(agentId.agentId);

      await Agent.findByIdAndUpdate(agentId.agentId, {
        $set: { status: true },
      });

      console.log("Agent is available");
    }

    res.status(200).send(`Status changed to ${req.body.status}`);
  } catch (err) {
    next(err);
  }
};

export const assignAgent = async (req, res, next) => {
  try {
    const agent = await Agent.findOne({ status: true });

    if (!agent) {
      res.status(404).send("Agent is unavailable.");
    } else {
      await Order.findByIdAndUpdate(req.params.oid, {
        agentId: agent._id,
      });

      await Agent.findByIdAndUpdate(agent._id, {
        status: false,
      });

      res.status(200).send("Agent assigned successfully.");
    }
  } catch (err) {
    next(err);
  }
};
