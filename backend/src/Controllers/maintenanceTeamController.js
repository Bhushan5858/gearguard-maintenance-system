import MaintenanceTeam from "../Models/MaintenanceTeam.js";

export const createTeam = async (req, res) => {
    try {
        const { name, members } = req.body;

        if (!name) {
            return res.status(400).json({ message: "Team name required" });
        }

        const team = await MaintenanceTeam.create({
            name,
            members: members || []
        });

        res.status(201).json(team);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
