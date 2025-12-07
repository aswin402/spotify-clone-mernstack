import { Message } from "../models/message_model.js";
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


export const getMessages = async(req,res)=>{
    try {
        const myId=req.auth.userId;
        const {userId}=req.params;
        
        const messages = await Message.find({
            $or: [
                {senderId:userId, receiverId:myId},
                {senderId:myId, receiverId:userId},
            ],
        }).sort({createdAt:1});
        res.status(200).json(messages);
    } catch (error) {
        next(error);
    }
}