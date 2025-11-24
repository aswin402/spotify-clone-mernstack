import {Album} from "../models/album_model.js";
export const getAlbums = async (req, res, next) => {
  try {
    const albums = await Album.find();/*populate('songs')*/
    res.status(200).json(albums);
  } catch (error) {
    console.error("Error fetching albums:", error);
    next(error);
  }
};

export const getAlbumsById = async (req, res, next) => {
  try {
    const { albumId } = req.params;
    const album = await Album.findById(albumId).populate('songs');

    if (!album) {
      return res.status(404).json({ message: "Album not found" });
    }

    res.status(200).json(album);
  } catch (error) {
    console.error("Error fetching album by ID:", error);
    next(error);
  }
};