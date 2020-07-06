//Message details model:
//postID, messageThreads[{}]

const mongoose = require("mongoose");

const { String, Date, Number } = mongoose.Schema.Types;

const MessageSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
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

export default mongoose.models.Message ||
  mongoose.model("Message", MessageSchema);
