import { User } from "../models/user_model.js";


export const authCallback = async (req, res) => {
  try {
    const {id, firstName, lastName, imageUrl} = req.body;
    //check if user exists
    let user = await User.findOne({clerkId: id});

    if(!user){
       user = await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl
       });
       return res.status(201).json({message: 'User created successfully', user});
    }

    res.status(200).json({message: 'User already exists', user});
  } catch (error) {
    console.error('Error in auth callback:', error);
    res.status(500).json({message: 'Internal server error'});
  }
}