import express, { Router } from "express";
import { login, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/login", login);

router.get("/logout", (req, res) => {
  res.send("Logout page");
});

router.post("/signup", signup);

export default router;
