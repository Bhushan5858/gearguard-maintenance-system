import express from "express";
import { createTeam } from "../Controllers/maintenanceTeamController.js";

const router = express.Router();
router.post("/", createTeam);

export default router;
