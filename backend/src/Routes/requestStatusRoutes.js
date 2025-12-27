import express from "express";
import { updateRequestStatus } from "../Controllers/requestStatusController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { allowRoles } from "../Middleware/roleMiddleware.js";

const router = express.Router();

router.patch("/:requestId/status", protect, allowRoles("TECHNICIAN"), updateRequestStatus);

export default router;
