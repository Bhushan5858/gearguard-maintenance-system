import MaintenanceRequest from "../Models/MaintenanceRequest.js";
import MaintenanceTeam from "../Models/MaintenanceTeam.js";

export const getCalendarData = async (req, res) => {
    try {
        const { role, userId } = req.user;

        // USER has no access to calendar
        if (role === "USER") {
            return res.status(403).json({
                message: "Users are not allowed to view maintenance calendar"
            });
        }

        let filter = {
            type: "PREVENTIVE",
            scheduledDate: { $ne: null }
        };

        if (role === "TECHNICIAN") {
            const teams = await MaintenanceTeam.find({
                members: userId
            }).select("_id");

            const teamIds = teams.map(team => team._id);

            filter.maintenanceTeam = { $in: teamIds };
        }

        // MANAGER sees all preventive requests

        const requests = await MaintenanceRequest.find(filter)
            .populate("equipment", "name location")
            .populate("maintenanceTeam", "name")
            .populate("assignedTechnician", "name")
            .sort({ scheduledDate: 1 });

        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
