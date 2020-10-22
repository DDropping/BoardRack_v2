import connectDb from "../../../../utils/ConnectDb";
import Post from "../../../../models/Post";
import User from "../../../../models/User";

import authenticate from "../../../../middleware/auth";

connectDb();

const handler = async (req, res) => {
  switch (req.method) {
    case "PUT":
      await handlePutRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

// @route   PUT api/posts/favorite/addFavorite
// @desc    Favorite a specific post | add userId to post favorite[], add postId to user favoritedPosts[]
// @access  Private
async function handlePutRequest(req, res) {
  try {
    const post = await Post.findById(req.body.postId);
    //check if user has already favorited the post
    if (
      post.favorites.filter((favorite) => favorite.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: "Post already favorited" });
    }

    //add favorite to post's favorites and save
    post.favorites.unshift(req.user.id);
    await post.save();

    //add favorite to user's favorites and save
    const user = await User.findById(req.user.id);
    user.favorites.unshift(req.body.postId);
    await user.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default authenticate(handler);
