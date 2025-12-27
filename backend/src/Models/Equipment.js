import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        serialNumber: {
            type: String,
            required: true,
            unique: true
        },
        department: {
            type: String
        },
        assignedEmployee: {
            type: String
        },
        purchaseDate: {
            type: Date
        },
        warrantyEndDate: {
            type: Date
        },
        location: {
            type: String
        },
        maintenanceTeam: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MaintenanceTeam",
            required: true
        },
        defaultTechnician: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        isScrapped: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

export default mongoose.model("Equipment", equipmentSchema);
