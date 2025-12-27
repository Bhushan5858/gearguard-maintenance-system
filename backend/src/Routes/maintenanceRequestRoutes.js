import express from "express";
import { createMaintenanceRequest } from "../Controllers/maintenanceRequestController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { allowRoles } from "../Middleware/roleMiddleware.js";


const router = express.Router();

router.post("/", protect, allowRoles("USER", "TECHNICIAN", "MANAGER"), createMaintenanceRequest);

export default router;
