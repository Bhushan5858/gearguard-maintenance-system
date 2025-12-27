import MaintenanceRequest from "../Models/MaintenanceRequest.js";
import Equipment from "../Models/Equipment.js";

const allowedTransitions = {
    NEW: ["IN_PROGRESS"],
    IN_PROGRESS: ["REPAIRED", "SCRAP"],
    REPAIRED: [],
    SCRAP: []
};

export const updateRequestStatus = async (req, res) => {
    try {
        const { requestId } = req.params;
        const { status, durationHours } = req.body;

        const request = await MaintenanceRequest.findById(requestId);

        if (!request) {
            return res.status(404).json({ message: "Request not found" });
        }

        const currentStatus = request.status;
        const allowedNextStatuses = allowedTransitions[currentStatus];

        if (!allowedNextStatuses.includes(status)) {
            return res.status(400).json({
                message: `Invalid status transition from ${currentStatus} to ${status}`
            });
        }

        request.status = status;

        if (status === "REPAIRED") {
            if (!durationHours) {
                return res.status(400).json({
                    message: "durationHours is required when repairing"
                });
            }
            request.durationHours = durationHours;
        }

        if (status === "SCRAP") {
            const equipment = await Equipment.findById(request.equipment);
            equipment.isScrapped = true;
            await equipment.save();
        }

        await request.save();

        res.json(request);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
