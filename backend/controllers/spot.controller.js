import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { Spot } from "../models/spot.model.js";

const getSpots = asyncHandler(async (req, res) => {
  const spots = await Spot.find()

  return res.status(200).json(new ApiResponse(200, spots));
});

export {getSpots}
