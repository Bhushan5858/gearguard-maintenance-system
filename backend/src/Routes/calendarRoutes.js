import express from "express";
import { getCalendarData } from "../Controllers/calendarController.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

// Preventive maintenance calendar
router.get("/", protect, getCalendarData);

export default router;
