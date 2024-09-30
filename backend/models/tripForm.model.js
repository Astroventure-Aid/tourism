import mongoose, { Schema } from "mongoose";

const tripFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please provide Name"],
    },
    email:{
        type: String,
        require: [true, "Please provide Email"]
    },
    phone:{
        type: String,
        require: [true, "Please provide Phone Number"]
    },
    transactionId: {
      type: String,
      required:  [true, "Please provide Transaction Id"],
    },

    photo: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },

    tripId: {
      type: mongoose.Schema.ObjectId,
      ref: "Trip",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const TripForm = mongoose.model("TripForm", tripFormSchema);
