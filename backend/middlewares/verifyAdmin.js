import {users} from "@clerk/clerk-sdk-node"

// Middleware to check if the user is an admin
const verifyAdmin = asyncHandler(async (req, res, next) => {
  const { sessionId } = req.headers;

  if (!sessionId) {
    throw new ApiError(401, "Unauthorized: No session found");
  }

  // Fetch the session information using Clerk SDK
  const session = await clerk.sessions.getSession(sessionId);
  const user = await users.getUser(session.userId);

  // Assuming `user.publicMetadata` or `user.privateMetadata` has a role field
  const userRole = user.publicMetadata.role; // or privateMetadata

  if (userRole !== 'admin') {
    throw new ApiError(403, "Forbidden: You do not have admin privileges");
  }

  // User is an admin, proceed to the next middleware/route
  next();
});

export {verifyAdmin}