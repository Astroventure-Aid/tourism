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
    price: {
      type: Number,
      required: [true, "Please provide Price"],
    },
    status: {
      // ComingSoon, Started, End
      type: String,
      required: [true, "Please provide Price"],
      default: "ComingSoon",
    },

    slotsAvailable: {
      type: Number,
    },
    discription: {
      type: String,
    },
    highlights: [
      {
        type: String,
      },
    ],
    schedule: [
      [
        {
          type: String,
        },
      ],
    ],
  },
  {
    timestamps: true,
  }
);

export const Trip = mongoose.model("Trip", tripSchema);
