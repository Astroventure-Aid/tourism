import { Router } from "express";
import { createTrip, getAllTrips, getFormsByTrip, getTrip, getUpcomingTrips, submitTripForm } from "../controllers/trip.controller.js";
import { getSpots } from "../controllers/spot.controller.js";

const router = Router()

router.route("/create-trip").post(createTrip) // Admin
router.route("/get-all-trips").get(getAllTrips) // Admin

router.route("/get-upcoming-trips").get(getUpcomingTrips)
router.route("/get-trip/:tripId").get(getTrip)

router.route("/submit-tripform/:tripId").post(submitTripForm) // User
router.route("/get-forms/:tripId").get(getFormsByTrip) // Admin

router.route("/get-spots").get(getSpots)

export default router