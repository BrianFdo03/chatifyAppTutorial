import express, { Router } from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Login page");
});

router.get("/logout", (req, res) => {
  res.send("Logout page");
});

router.get("/sigin", (req, res) => {
  res.send("Signin page");
});

export default router;
