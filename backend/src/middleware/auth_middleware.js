import { clerkClient } from "@clerk/express";

export const authMiddleware = async (req, res, next) => {
  try {
    const { userId } = req.auth;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const clerkUser = await clerkClient.users.getUser(userId);
    req.user = {
      id: clerkUser.id,
      email: clerkUser.emailAddresses[0]?.emailAddress || null,
      firstName: clerkUser.firstName || null,
      lastName: clerkUser.lastName || null,
      imageUrl: clerkUser.profileImageUrl || null,
    };

    next();
  } catch (error) {
    console.error("Error in auth middleware:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export const requireAdmin = async  (req, res, next) => {
    try {
        const currentUser = await clerkClient.users.getUser(req.auth.userId);
        const isAdmin = process.env.ADMIN_EMAIL===currentUser.primaryEmailAddress?.emailAddress;
        if(!isAdmin){
            return res.status(403).json({message:"Forbidden"})
        }
        next();
    } catch (error) {
        console.error("Error in admin middleware:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}   