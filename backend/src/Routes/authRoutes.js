import express from "express";
import { register, login } from "../Controllers/authController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { allowRoles } from "../Middleware/roleMiddleware.js";


const router = express.Router();

router.post("/register",protect,allowRoles("MANAGER"), register);
router.post("/login", login);

export default router;
