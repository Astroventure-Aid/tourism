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
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      require: [true, "Please provide main photo of location"],
    },
    slotsAvailable: {
      type: Number,
      require: [true, "Please provide Slots Available"],
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
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Trip = mongoose.model("Trip", tripSchema);