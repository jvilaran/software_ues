import { mongoose } from 'mongoose';

const gamesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        type: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        }
    }, { timestamps: true }
);

export default mongoose.model('games', gamesSchema);