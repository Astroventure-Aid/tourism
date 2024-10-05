import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { Trip } from "../models/trip.model.js";
import { TripForm } from "../models/tripForm.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import fs from 'fs';

// upload trips -- Admin
const createTrip = asyncHandler(async (req, res) => {
  let { location, origin } = req.body;

  req.body.location = location?.trim();
  req.body.origin = origin?.trim();

  // Cloudinary should be added

  const newTrip = await Trip.create(req.body);

  return res
    .status(201)
    .json(new ApiResponse(201, newTrip, "New Trip created"));
});

// get All trips -- Admin
const getAllTrips = asyncHandler(async (req, res) => {
  const trips = await Trip.find();

  return res.status(200).json(new ApiResponse(200, trips));
});

// get upcomming trips
const getUpcomingTrips = asyncHandler(async (req, res) => {
  const upcommingTrips = await Trip.find({$or: [ { status: "ComingSoon"}, { status: "Started" } ]});

  return res.status(200).json(new ApiResponse(200, upcommingTrips));
});

// get single trip
const getTrip = asyncHandler(async (req, res) => {
  const { tripId } = req.params;

  const trip = await Trip.findById(tripId);

  if (!trip) {
    throw new ApiError(404, "Trip not found");
  }

  const currentDate = new Date();

  const hasEnded = trip.tripDate < currentDate;

  if (hasEnded) {
    throw new ApiError(401, "Trip Ended");
  }

  res.status(200).json(new ApiResponse(200, trip));
});

// submit trip form -- User
const submitTripForm = asyncHandler(async (req, res) => {
  const { tripId } = req.params;

  const trip = await Trip.findById(tripId);
  if (!trip) {
    throw new ApiError(404, "Trip not found");
  }

  // Destructure the required fields from req.body
  let { name, email, phone, optionalPhone, transactionId} = req.body;

  // Ensure that fields are trimmed
  name = name?.trim();
  email = email?.trim();
  phone = phone?.trim();
  optionalPhone = optionalPhone?.trim();
  transactionId = transactionId?.trim();

  // add cloudinary
  let cloudinaryObject = null;
  if (req.file) {
    cloudinaryObject = await uploadOnCloudinary(req.file);
  } else {
    throw new ApiError(400, 'File not uploaded');
  }

  // Delete the file from the local folder after successful upload
  fs.unlink(req.file.path, (err) => {
    if (err) {
      console.error("Error while deleting file:", err);
    }
  });

  // Now create the trip form using the trimmed values
  const submittedForm = await TripForm.create({
    name,
    email,
    phone,
    optionalPhone,
    transactionId,
    upiPaymentSS: cloudinaryObject.url,
    tripId,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, submittedForm, "Trip Form Submitted"));
});

// get forms by trip -- Admin
const getFormsByTrip = asyncHandler(async (req, res) => {
  const { tripId } = req.params;

  const trip = await Trip.findById(tripId);

  if (!trip) {
    throw new ApiError(404, "Trip not found");
  }

  const forms = await TripForm.find({ tripId });

  return res.status(200).json(new ApiResponse(200, forms));
});

const isFormSubmitted = asyncHandler(async (req, res) => {
  const { tripId } = req.params;

  const trip = await Trip.findById(tripId);

  if (!trip) {
    throw new ApiError(404, "Trip not found");
  }
  const response = await TripForm.find({email : req.body.email, tripId})

  const isSubmitted = response.length > 0
  
  return res.status(200).json(new ApiResponse(200, isSubmitted));
});

export {
  createTrip,
  getAllTrips,
  getTrip,
  getUpcomingTrips,
  submitTripForm,
  getFormsByTrip,
  isFormSubmitted
};
