import express from "express";
import { createMaintenanceRequest } from "../Controllers/maintenanceRequestController.js";

const router = express.Router();

router.post("/", createMaintenanceRequest);

export default router;
