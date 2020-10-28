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

// @route   DELETE api/posts/deletepost/[id]
// @desc    delete a post
// @res
// @access  Protected
async function handleDeleteRequest(req, res) {
  const {
    query: { id },
  } = req;

  try {
    //get user
    let userAccount = await User.findById(id);

    //verify account ownership
    if (userAccount._id.toString() === req.user.id.toString()) {
      //remove all postId's created by deletedUser from all user's favorites array
      // === WARNING === removing postId from all User favotires can be time consuming and result in long wait time.
      // === WARNING === move to outside api call to reduce wait time on client.
      await User.updateMany(
        { favorites: { $in: userAccount.posts } },
        { $pull: { favorites: { $in: userAccount.posts } } }
      );

      //delete user from db
      await User.findByIdAndDelete(id);
      res.status(200).send("Account Deactivated");
    } else {
      res.status(403).send("Invalid Permissions");
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
}

export default authenticate(handler);
