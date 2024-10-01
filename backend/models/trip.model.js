import mongoose, { Schema } from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: [true, "Please provide Location of trip"],
    },
    tripDate: {
      type: Date,
      required: [true, "Please provide Date of trip"],
    },
    origin: {
      type: String,
      required: [true, "Please provide Origin of trip"],
    },
    mainPhoto: {
      type: String,
      required: [true, "Please provide main photo of location"],
    },
    price:{
      type: Number,
      required: [true, "Please provide Price"],
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