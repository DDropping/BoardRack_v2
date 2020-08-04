//Message details model:
//type, users:[author, user], postId, date, messages: [{from, body, timeSent}]

import mongoose from "mongoose";

const { String, Date } = mongoose.Schema.Types;

const MessageSchema = new mongoose.Schema({
  type: {
    /* post: (message thread is about a post) | user: (message thread is just a chat between two users) */
    type: String,
  },
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
