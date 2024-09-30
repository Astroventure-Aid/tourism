import mongoose, { Schema } from "mongoose";

const spotSchema = new mongoose.Schema(
  {
    spotName: {
      type: String,
      require: [true, "Please provide name of Spot"],
    },
    spotPhoto: {
      type: String,
      require: [true, "Please provide photo of spot"],
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
