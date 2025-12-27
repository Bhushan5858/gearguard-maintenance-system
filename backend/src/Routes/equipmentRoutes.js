import express from "express";
import { createEquipment } from "../Controllers/equipmentController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { allowRoles } from "../Middleware/roleMiddleware.js";

const router = express.Router();
router.post("/",protect,allowRoles("MANAGER"), createEquipment);

export default router;
