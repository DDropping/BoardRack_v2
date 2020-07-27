import connectDb from "../../../../utils/ConnectDb";
import Post from "../../../../models/Post";
import "../../../../models/User";
import authenticate from "../../../../middleware/auth";
import mongoose from "mongoose";

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
// @desc    retrieve all posts from db
// @res     posts: {... array of all posts}
// @access  Public
async function handleGetRequest(req, res) {
  try {
    const posts = await Post.find({
      user: new mongoose.Types.ObjectId(req.user.id),
    });

    if (!posts) {
      return res.status(400).json({ msg: "There is no posts" });
    }

    res.status(200).json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default authenticate(handler);
