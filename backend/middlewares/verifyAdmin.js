import { createClerkClient } from "@clerk/backend";
import ApiError from "../utils/ApiError.js";

const verifyAdmin = async (req, res, next) => {
  const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
  });
  
  try {
    

    next();
  } catch (error) {
    console.log(error);
  }
};

export { verifyAdmin };
