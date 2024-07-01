import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true // Example: text is required
    },
    votes: {
        type: Number,
        default: 0 // Example: default value for votes
    },
    link_toVote: {
        type: String,
        default: function() {
            return `http://localhost:3000/options/${this._id}/add_vote`;
        }
    }
});

export const OptionModel = mongoose.model('Option', optionSchema); // Corrected export name to OptionModel
