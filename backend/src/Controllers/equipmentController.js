import Equipment from "../Models/Equipment.js";

export const createEquipment = async (req, res) => {
    try {
        const {
            name,
            serialNumber,
            location,
            maintenanceTeam,
            defaultTechnician
        } = req.body;

        if (!name || !serialNumber || !maintenanceTeam) {
            return res.status(400).json({
                message: "Name, serialNumber, and maintenanceTeam are required"
            });
        }

        const equipment = await Equipment.create({
            name,
            serialNumber,
            location,
            maintenanceTeam,
            defaultTechnician
        });

        res.status(201).json(equipment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
