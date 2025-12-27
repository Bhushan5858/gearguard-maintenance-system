import express from "express";
import { createTeam } from "../Controllers/maintenanceTeamController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { allowRoles } from "../Middleware/roleMiddleware.js";

const router = express.Router();
router.post("/",protect,allowRoles("MANAGER"), createTeam);

export default router;
