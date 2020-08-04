import connectDb from "../../../utils/ConnectDb";
import Message from "../../../models/Message";
import Post from "../../../models/Post";
import User from "../../../models/User";

import authenticate from "../../../middleware/auth";

connectDb();

const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      await handlePostRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

// @route   POST api/posts/createpost
// @desc    create new post in db
// @res     post{...postItems}
// @access  Protected
async function handlePostRequest(req, res) {
  const { type, postId, sendToUserId, messageBody } = req.body;
  const sendFromUserId = req.user.id;

  const message = {
    from: sendFromUserId,
    body: messageBody,
    timeSent: Date.now(),
  };

  try {
    //user: check if message thread exists between the two users
    let messageThread;
    if (type === "user") {
      messageThread = await Message.findOne({
        users: { $all: [sendToUserId, sendFromUserId] },
      });
    }
    //post: check if message thread exists between the two users about this specific post
    if (type === "post") {
      messageThread = await Message.findOne({
        users: { $all: [sendToUserId, sendFromUserId] },
        postId: postId,
      });
    }
    //if thread exists, add new message to messages
    if (messageThread) {
      messageThread.messages.push(message);
      messageThread.lastUpdated = Date.now();
      await messageThread.save();
    } else {
      //else create new message thread && add message thread to both user's messages:[]
      const newMessageThread = {
        type: type,
        users: [sendToUserId, sendFromUserId],
        postId: postId,
        dateCreated: Date.now(),
        lastUpdated: Date.now(),
        messages: [message],
      };

      messageThread = new Message(newMessageThread);
      await messageThread.save();

      //save to users messages[]
      let user1 = await User.findById(sendFromUserId);
      user1.messages.unshift(messageThread._id);
      user1.save();

      let user2 = await User.findById(sendToUserId);
      user2.messages.unshift(messageThread._id);
      user2.save();
    }

    //return message thread
    res.json(messageThread);
  } catch (err) {
    console.error(err.message);
    re.status(500).send("Server Error");
  }
}

export default authenticate(handler);
