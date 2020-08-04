//Message details model:
//postID, messageThreads[{}]

import mongoose from "mongoose";

const { String, Date, Boolean } = mongoose.Schema.Types;

const MessageSchema = new mongoose.Schema({
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      body: {
        type: String,
      },
      timeSent: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

export default mongoose.models.message ||
  mongoose.model("message", MessageSchema);
