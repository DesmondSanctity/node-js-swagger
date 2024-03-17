import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CommentSchema = new mongoose.Schema({
 content: {
  type: String,
  required: [true, 'Please provide content for the comment'],
  unique: false,
 },
 author: {
  type: Schema.Types.ObjectId,
  ref: 'User',
  required: [true, 'comment should have an author'],
 },
 post: {
  type: Schema.Types.ObjectId,
  ref: 'Post',
  required: [true, 'comment should have a related post'],
 }
});

export default mongoose.model.Comment || mongoose.model('Comment', CommentSchema);
