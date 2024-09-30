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
    optionalPhone:{
      type: String,
    },

    transactionId: {
      type: String,
      required:  [true, "Please provide Transaction Id"],
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
