import Restaurant from "../models/Restaurant.js";
import Agent from "../models/Agent.js";

export const addRestaurant = async (req, res, next) => {
  try {
    const newRestaurant = new Restaurant(req.body);
    await newRestaurant.save();
    res.status(200).send("Restaurant Added.");
  } catch (err) {
    next(err);
  }
};

export const createAgent = async (req, res, next) => {
  try {
    const newAgent = new Agent(req.body);
    await newAgent.save();
    res.status(200).send("Agent Added.");
  } catch (err) {
    next(err);
  }
};

export const getAllAgents = async (req, res, next) => {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
  } catch (err) {
    next(err);
  }
};

export const getAllRestaurant = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (err) {
    next(err);
  }
};
