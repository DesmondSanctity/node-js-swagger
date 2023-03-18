import mongoose from "mongoose";


export const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
        unique: false,
    },
    description: {
        type: String,
        required: [true, "Please provide a description for the post"],
        unique: false,
    },
    content: {
        type: String,
        required: [true, "Please provide content for the post"],
        unique: false,
    },
    author: {
        type: String,
        required: [true, "Please provide author's name content"],
        unique: false,
    }
    
});


export default mongoose.model.Post || mongoose.model('Post', PostSchema);