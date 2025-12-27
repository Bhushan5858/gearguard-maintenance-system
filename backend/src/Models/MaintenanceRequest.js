import mongoose from "mongoose";

const maintenanceRequestSchema = new mongoose.Schema(
    {
        subject: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ["CORRECTIVE", "PREVENTIVE"],
            required: true
        },
        equipment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Equipment",
            required: true
        },
        maintenanceTeam: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MaintenanceTeam",
            required: true
        },
        assignedTechnician: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        status: {
            type: String,
            enum: ["NEW", "IN_PROGRESS", "REPAIRED", "SCRAP"],
            default: "NEW"
        },
        scheduledDate: {
            type: Date
        },
        durationHours: {
            type: Number
        }
    },
    { timestamps: true }
);

export default mongoose.model("MaintenanceRequest", maintenanceRequestSchema);
