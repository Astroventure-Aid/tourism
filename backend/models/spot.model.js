import mongoose, { Schema } from "mongoose";

const spotSchema = new mongoose.Schema(
  {
    spotName: {
      type: String,
      required: [true, "Please provide name of Spot"],
    },
    spotPhoto: {
      type: String,
      required: [true, "Please provide photo of spot"],
    },
    discription: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Spot = mongoose.model("Spot", spotSchema);
