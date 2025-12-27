import mongoose from "mongoose";

const maintenanceTeamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        members: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    { timestamps: true }
);

export default mongoose.model("MaintenanceTeam", maintenanceTeamSchema);
