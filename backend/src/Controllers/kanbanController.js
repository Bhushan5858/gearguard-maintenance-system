import MaintenanceRequest from "../Models/MaintenanceRequest.js";
import MaintenanceTeam from "../Models/MaintenanceTeam.js";

export const getKanbanData = async (req, res) => {
    try {
        const { role, userId } = req.user;

        let filter = {};

        if (role === "TECHNICIAN") {
            // find teams this technician belongs to
            const teams = await MaintenanceTeam.find({
                members: userId
            }).select("_id");

            const teamIds = teams.map(team => team._id);

            filter.maintenanceTeam = { $in: teamIds };
        }

        if (role === "USER") {
            filter.createdBy = userId;
        }

        // MANAGER sees everything

        const requests = await MaintenanceRequest.find(filter)
            .populate("equipment", "name location")
            .populate("assignedTechnician", "name")
            .sort({ createdAt: -1 });

        const kanban = {
            NEW: [],
            IN_PROGRESS: [],
            REPAIRED: [],
            SCRAP: []
        };

        requests.forEach(request => {
            kanban[request.status].push(request);
        });

        res.json(kanban);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
