import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: false,
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "song"
    }],
},{
    timestamps: true,
});

export const Album = mongoose.model('Album', albumSchema)