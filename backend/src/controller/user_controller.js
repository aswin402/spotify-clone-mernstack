import {User} from "../models/user_model.js";

export const getAllUsers =  async (req, res) => {
    try {
        const currentUserId = req.auth.userId;
        const users = await User.find({ _id: { $ne: currentUserId } });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: "Error fetching users", error: error.message});
    }
}