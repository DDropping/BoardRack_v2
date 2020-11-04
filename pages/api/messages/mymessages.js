import connectDb from "../../../utils/ConnectDb";
import Message from "../../../models/Message";
import "../../../models/User";
import "../../../models/Post";
import authenticate from "../../../middleware/auth";
import mongoose from "mongoose";
import User from "../../../models/User";

connectDb();

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

// @route   GET api/posts/postdetails/myposts
// @desc    retrieve all posts that user has created
// @res     posts: {... array of all posts}
// @access  Public
async function handleGetRequest(req, res) {
  try {
    // find results in one query
    // const messages = await Message.find({
    //   users: { $in: new mongoose.Types.ObjectId(req.user.id) },
    // })
    //   .populate([
    //     { path: "post" },
    //     { path: "users", select: "username profileImage" },
    //   ])
    //   .sort({ lastUpdated: -1 });
    const populateQuery = [
      {
        path: "messages",
        populate: [
          { path: "post" },
          { path: "users", select: "username profileImage" },
        ],
      },
    ];

    const user = await User.findById(req.user.id)
      .populate(populateQuery)
      .select("messages");

    if (!user) res.status(404).send("User Not Found");

    const messages = user.messages;

    if (!messages) {
      return res.status(400).json({ msg: "There are no Messages" });
    }

    res.status(200).json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default authenticate(handler);
