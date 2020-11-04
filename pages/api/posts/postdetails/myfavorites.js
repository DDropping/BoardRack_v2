import connectDb from "../../../../utils/ConnectDb";
import Post from "../../../../models/Post";
import User from "../../../../models/User";
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

// @route   GET api/posts/postdetails/myfavorites
// @desc    retrieve all posts that user has favorited
// @res     posts: {... array of all posts}
// @access  Public
async function handleGetRequest(req, res) {
  try {
    const userFavorites = await User.findById(req.user.id).select("favorites");
    if (!userFavorites) res.status(404).send("User Not Found");

    const posts = await Post.find({
      _id: { $in: userFavorites.favorites },
    });
    if (!posts) {
      return res.status(400).send("There is no posts");
    }

    res.status(200).json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default authenticate(handler);
