import express from "express";
import cors from "cors";
import maintenanceRequestRoutes from "./Routes/maintenanceRequestRoutes.js"
import userRoutes from "./Routes/userRoutes.js"
import equipmentRoutes from "./Routes/equipmentRoutes.js"
import maintenanceTeamRoutes from "./Routes/maintenanceTeamRoutes.js"
import requestStatusRoutes from "./Routes/requestStatusRoutes.js"
import authRoutes  from "./Routes/authRoutes.js"
import kanbanRoutes from "./Routes/kanbanRoutes.js"
import calenderRoute from "./Routes/calendarRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/requests", maintenanceRequestRoutes)
app.use("/api/users", authRoutes)
app.use("/api/equipment", equipmentRoutes)
app.use("/api/teams", maintenanceTeamRoutes)
app.use("/api/requests", requestStatusRoutes)
app.use("/api/kanban",kanbanRoutes)
app.use("/api/calendar",calenderRoute)

export default app;
