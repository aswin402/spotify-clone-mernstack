import {Song} from "../models/song_model.js";

export const getAllSongs = async (req, res) => {
  try {
    // sort by date created in descending order
    // -1 means descending order => newest -> oldest
    // 1 means ascending order => oldest -> newest
    const songs = await Song.find().sort({ createdAt: -1 });
    if (!songs.length) {
      return res.status(404).json({ message: "No songs found" });
    }
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



export const getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}   



export const getFeaturedSongs = async (req, res) => {
  try {
    const featuredSongs = await Song.aggregate([
      { $sample: { size: 6 } },{
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        }
      }
    ]);
    if (!featuredSongs.length) {
      {
        console.log("Error fetching featured songs:", error);
      }
      return res.status(404).json({ message: "No featured songs found" });
    }
    res.status(200).json(featuredSongs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


export const getMadeForYouSongs = async (req, res) => {
  try {
    const madeForYouSongs = await Song.aggregate([
      { $sample: { size: 4 } },{
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        }
      }
    ]);
    if (!madeForYouSongs.length) {
      return res.status(404).json({ message: "No 'Made for You' songs found" });
    }
    res.status(200).json(madeForYouSongs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



export const getTrendingSongs = async (req, res) => {
  try {
    const trendingSongs = await Song.aggregate([
      { $sample: { size: 4 } },{
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        }
      }
    ]);
    if (!trendingSongs.length) {
      return res.status(404).json({ message: "No trending songs found" });
    }
    res.status(200).json(trendingSongs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}