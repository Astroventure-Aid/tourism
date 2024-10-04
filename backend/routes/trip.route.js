import { Router } from "express";
import { createTrip, getAllTrips, getFormsByTrip, getTrip, getUpcomingTrips, isFormSubmitted, submitTripForm } from "../controllers/trip.controller.js";
import { getSpots } from "../controllers/spot.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.js";

const router = Router()

router.route("/admin/create-trip").post(verifyAdmin,createTrip) // Admin
router.route("/admin/get-all-trips").get(verifyAdmin,getAllTrips) // Admin

router.route("/get-upcoming-trips").get(getUpcomingTrips)
router.route("/get-trip/:tripId").get(getTrip)

router.route("/submit-tripform/:tripId").post(upload.single("upiPaymentSS"),submitTripForm); // User
router.route("/admin/get-forms/:tripId").get(verifyAdmin,getFormsByTrip) // Admin

router.route("/is-form-submitted/:tripId").post(isFormSubmitted)

router.route("/get-spots").get(getSpots)

export default router