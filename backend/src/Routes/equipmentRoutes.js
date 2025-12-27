import express from "express";
import { createEquipment } from "../Controllers/equipmentController.js";

const router = express.Router();
router.post("/", createEquipment);

export default router;
