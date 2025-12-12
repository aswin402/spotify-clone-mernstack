import {Song} from "../models/song_model.js";
import {Album} from "../models/album_model.js";
import {User} from "../models/user_model.js";


export const getStats= async (req, res) => {
  try {
    const [totalSongs, totalUsers, totalAlbums, uniqueArtists] = await Promise.all([
      Song.countDocuments(),
      User.countDocuments(),
      Album.countDocuments(), 
      // Song.distinct('artist').then(artists => artists.length),
      Song.aggregate([
        {$unionWith: {coll: "albums", pipeline: []}},
        { $group: { _id: "$artist" } },
        { $count: "count" }
      ]).then(result => result[0] ? result[0].count : 0)
    ]);

    res.json({
      totalSongs,
      totalUsers,
      totalAlbums, 
      totalArtists: uniqueArtists,
    });   
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ message: "Error fetching stats", error: error.message });
  }
}