//Message details model:
//type, users:[author, user], postId, date, messages: [{from, body, timeSent}]

import mongoose from "mongoose";

const { String, Date } = mongoose.Schema.Types;

const MessageSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "post",
    required: true,
    enum: ["user", "post", "support"],
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
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  lastUpdated: {
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
