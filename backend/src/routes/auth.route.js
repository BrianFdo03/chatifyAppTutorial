import express, { Router } from "express";
import {
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

// This method will be run 1st when routers in this page triggered
// then the normal function will run
// Ex: this is similar to router.post("/login", arcjetProtection, login);
router.use(arcjetProtection);

router.post("/login", login);

router.post("/logout", logout);

router.post("/signup", signup);

router.put("/update-profile", protectRoute, updateProfile);

// Apparently to check users when they refresh the page or when they enter site
router.get("/check", protectRoute, (req, res) => {
  res.status(200).json({ message: "User is authenticated", user: req.user });
});

export default router;
