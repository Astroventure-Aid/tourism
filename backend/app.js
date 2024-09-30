import express from 'express';
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())

// Routes
import tripRoutes from "./routes/trip.route.js"
app.use("/api/v1/trip",tripRoutes)

// middleware
import error from "./middlewares/errror.middleware.js"
app.use(error)

export default app