import mongoose, { Schema } from "mongoose";

const tripFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide Name"],
    },
    email: {
      type: String,
      required: [true, "Please provide Email"],
    },
    phone: {
      type: String,
      required: [true, "Please provide Phone Number"],
    },
    optionalPhone: {
      type: String,
    },

    transactionId: {
      type: String,
      required: [true, "Please provide Transaction Id"],
    },
    upiPaymentSS: {
      type: String,
      require: [true, "Please provide the screen Shot of UPI Payment"],
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
