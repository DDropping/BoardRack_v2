import connectDb from "../../../../utils/ConnectDb";
import Post from "../../../../models/Post";
import User from "../../../../models/User";

import authenticate from "../../../../middleware/auth";

connectDb();

const handler = async (req, res) => {
  switch (req.method) {
    case "PATCH":
      await handlePatchRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

// @route   PATCH api/posts/deletepost/[id]
// @desc    delete a post
// @res
// @access  Protected
async function handlePatchRequest(req, res) {
  const {
    query: { id, isSold },
  } = req;

  try {
    //get post
    let postData = await Post.findById(id);

    //compare post author id to user id
    if (postData.user.toString() === req.user.id.toString()) {
      //update post status flags
      postData.isSold = isSold;
      postData.isAvailable = false;
      await postData.save();

      //remove post from user's posts
      await User.findByIdAndUpdate(req.user.id, { $pull: { posts: id } });

      res.status(200).send("Delete Successful");
    } else {
      res
        .status(403)
        .send("Invalid Request: User does not have delete permissions");
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
}

export default authenticate(handler);
