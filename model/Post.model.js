import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
    author: { type: Schema.Types.ObjectId, ref: "User", required: [true, "post should have an author"] }
    
});


export default mongoose.model.Post || mongoose.model('Post', PostSchema);