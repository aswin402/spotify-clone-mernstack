import {Song} from '../models/song_model.js';
import { Album } from '../models/album_model.js';
import cloudinary from '../lib/cloudinary.js';

//function for upload files to cloudinary=========================================
const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "auto",
    });
    return result.secure_url;
  } catch (error) {  
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload file to Cloudinary");
  }
}

//create a song===============================================================
export const createSong = async (req, res, next) => {
  try {
    if(!req.files || !req.files.audioFile || !req.files.imageFile) {
      return res.status(400).json({ message: "Please upload both audio and image files" });
    }

    const { title, artist, duration, albumId } = req.body;
    
    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;

    const audioUrl = await uploadToCloudinary(audioFile);
    const imageUrl = await uploadToCloudinary(imageFile);

    const song = new Song({
      title,
      artist,
      audioUrl,
      imageUrl,
      duration: parseInt(duration) || 0,
      albumId: albumId || null,
    });

    await song.save();

    if(albumId){
      await Album.findByIdAndUpdate(albumId, { $push: { songs: song._id } }); 
    }

    res.status(201).json({ message: "Song created successfully", song }); 
  } catch (error) {
    console.error("Error creating song:", error);
    next(error);
  }
};


//delete a song=================================================================
export const deleteSong = async (req, res, next) => {
  try {
    const { id } = req.params;

    const song = await Song.findById(id);     

    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    if (song.albumId) {
      await Album.findByIdAndUpdate(song.albumId, { $pull: { songs: song._id } });
    }
    
    await Song.findByIdAndDelete(id);

    res.status(200).json({ message: "Song deleted successfully" });
  } catch (error) {
    console.error("Error deleting song:", error);
    next(error);
  }
}


//create an album===============================================================
export const createAlbum = async (req, res, next) => {
 try {
  if(!req.files || !req.files.imageFile) {
    return res.status(400).json({ message: "Please upload an image file" });
  }

  const {title, artist, releaseDate} = req.body;
  const imageFile = req.files.imageFile;
  const imageUrl = await uploadToCloudinary(imageFile);

  const album=new Album({
    title,
    artist,
    releaseDate,
    imageUrl,
  }
  );
  await album.save();
  res.status(201).json({message:"Album created successfully", album});

 } catch (error) {
  console.log(error,"error in create album");
  next(error);
 }
}   

//delete an album===============================================================
export const deleteAlbum = async(req,res,next)=>{
try{
  const{albumId}=req.params;
  await Song.deleteMany({albumId});

  const album=await Album.findById(albumId);
if(!album){return res.status(404).json({message:"Album not found"})};
await Album.findByIdAndDelete(albumId);
res.status(200).json({message:"Album deleted successfully"});
}catch(err){
console.log(err,"error in delete album");
next(err)
}
} 

export const checkAdmin = (req, res, next) => {
  // Check if the user is authenticated and has admin privileges here.
  // For example:
  res.status(200).json({admin:true,message:"You are Admin"});
}