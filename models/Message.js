//Message details model:
//postID, messageThreads[{}]

import mongoose from "mongoose";

const { String, Date, Number } = mongoose.Schema.Types;

const MessageSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
  authorId: {
    type: String,
  },
  userId: {
    type: String,
  },
  messageThread: [
    {
      mFrom: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
      timeSent: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.message ||
  mongoose.model("message", MessageSchema);
