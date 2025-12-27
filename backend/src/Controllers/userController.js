import User from "../Models/User.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, role } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "Name and email required" });
        }

        const user = await User.create({ name, email, role });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
