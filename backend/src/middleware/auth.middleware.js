import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

export const protectRoute = async (req, res, next) => {
  // next means to go to the next function in the route handler
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }

    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    // by select -password we get everything except the password
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "Unauthorized - User not found" });
    }

    req.user = user; // Attach user info to request object to work with next function

    next();
  } catch (error) {
    console.log("Error in ProtectRoute middleware: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
