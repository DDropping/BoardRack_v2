import connectDb from "../../../../utils/ConnectDb";
import Post from "../../../../models/Post";
import User from "../../../../models/User";

import authenticate from "../../../../middleware/auth";

connectDb();

const handler = async (req, res) => {
  switch (req.method) {
    case "DELETE":
      await handleDeleteRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

// @route   DELETE api/posts/createpost
// @desc    delete a post
// @res
// @access  Protected
async function handleDeleteRequest(req, res) {
  const {
    query: { id },
  } = req;

  try {
    //get post
    let postData = await Post.findById(id);

    //compare post author id to user id
    if (postData.user.toString() === req.user.id.toString()) {
      console.log("User Credentials Passed");

      //remove postId from all user's favorites array
      // === WARNING === removing postId from all User favotires can be time consuming and result in long wait time.
      // === WARNING === move to outside api call to reduce wait time on client.
      await User.updateMany(
        { favorites: { $eq: id } },
        { $pull: { favorites: id } }
      );

      //delete post from db
      await Post.findByIdAndDelete(id);
      res.status(200).send("Delete Successful");
    } else {
      res
        .status(403)
        .send("Invalid Request: User does not have delete permissions");
    }
  } catch (err) {
    re.status(500).send("Server Error");
  }
}

export default authenticate(handler);
