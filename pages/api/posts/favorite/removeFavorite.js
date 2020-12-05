import connectDb from "../../../../utils/connectDb";
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

// @route   PUT api/posts/favorite/removeFavorite
// @desc    Favorite a specific post | add userId to post favorite[], add postId to user favoritedPosts[]
// @access  Private
async function handlePutRequest(req, res) {
  try {
    const post = await Post.findById(req.body.postId);
    if (!post) res.status(404).send("Post Not Found");

    //check if user has already favorited the post
    if (
      post.favorites.filter((favorite) => favorite.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "Post is not favorited" });
    }

    //remove favorite from post's favorites array
    const removePostIndex = post.favorites
      .map((favorite) => favorite.toString())
      .indexOf(req.user.id);
    post.favorites.splice(removePostIndex, 1);
    await post.save();

    //remove favorite from user's favorites array
    const user = await User.findById(req.user.id);
    if (!user) res.status(404).send("User Not Found");

    const removeUserIndex = user.favorites
      .map((favorite) => favorite.toString())
      .indexOf(req.body.postId);
    user.favorites.splice(removeUserIndex, 1);
    await user.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default authenticate(handler);
