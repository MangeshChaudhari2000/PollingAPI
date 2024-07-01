import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    title: {
        type: String
    },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option' // Referring to the 'Option' model
    }]
});

export const QuestionModel = mongoose.model('Question', questionSchema);
