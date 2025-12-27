import MaintenanceRequest from "../Models/MaintenanceRequest.js";
import Equipment from "../Models/Equipment.js";

export const createMaintenanceRequest = async (req, res) => {
    try {
        const { subject, type, equipmentId, scheduledDate } = req.body;

        if (!subject || !type || !equipmentId) {
            return res.status(400).json({
                message: "Subject, type, and equipmentId are required"
            });
        }

        const equipment = await Equipment.findById(equipmentId);

        if (!equipment) {
            return res.status(404).json({
                message: "Equipment not found"
            });
        }

        if (equipment.isScrapped) {
            return res.status(400).json({
                message: "This equipment is scrapped and cannot be repaired"
            });
        }

        const maintenanceRequest = await MaintenanceRequest.create({
            subject,
            type,
            equipment: equipment._id,
            maintenanceTeam: equipment.maintenanceTeam,
            assignedTechnician: equipment.defaultTechnician || null,
            scheduledDate: type === "PREVENTIVE" ? scheduledDate : null
        });

        res.status(201).json(maintenanceRequest);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
