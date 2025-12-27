import express from "express";
import { getKanbanData } from "../Controllers/kanbanController.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

// Kanban board data (role-based)
router.get("/", protect, getKanbanData);

export default router;
