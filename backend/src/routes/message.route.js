import express from "express";
import { Router } from "express";

const router = express.Router();

router.get("/send", (req, res) => {
  res.send("Send Message to endpoint");
});

router.get("/inbox", (req, res) => {
  res.send("Inbox Messages endpoint");
});

export default router;
