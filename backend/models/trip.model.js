import mongoose, { Schema } from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      require: [true, "Please provide Location of trip"],
    },
    tripDate: {
      type: Date,
      require: [true, "Please provide Date of trip"],
    },
    origin: {
      type: String,
      require: [true, "Please provide Origin of trip"],
    },
    mainPhoto: {
      type: String,
      require: [true, "Please provide main photo of location"],
    },
    
    slotsAvailable: {
      type: Number,
    },
    highlights: [
      {
        type: String,
      },
    ],
    discription: {
      type: String,
    },
    photos: [
      {
        type: String
      }
    ],
  },
  {
    timestamps: true,
  }
);

export const Trip = mongoose.model("Trip", tripSchema);