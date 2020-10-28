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
  console.log("inside delete account route");
  const {
    query: { id },
  } = req;
  console.log("req.query user id: ", id);

  try {
    //get user
    let userAccount = await User.findById(id);
    console.log("user id: ", userAccount._id);

    //verify account ownership
    if (userAccount._id.toString() === req.user.id.toString()) {
      console.log("User Credentials Passed");

      //remove all postId's created by deletedUser from all user's favorites array
      // === WARNING === removing postId from all User favotires can be time consuming and result in long wait time.
      // === WARNING === move to outside api call to reduce wait time on client.
      //   await User.updateMany(
      //     { favorites:  userAccount.posts },
      //     { $pull: { favorites: userAccount.posts } }
      //   );

      //   await User.updateMany(
      //     {favorites: {$in: userAccount.posts}},
      //     { $pull: { favorites: userAccount.posts } }
      //   );

      const users = await User.updateMany(
        { favorites: { $in: userAccount.posts } },
        { $pull: { favorites: { $in: userAccount.posts } } }
      );
      //console.log("results: ", users);

      //delete user from db
      //   await User.findByIdAndDelete(id);
      res.status(200).json(users);
    } else {
      res.status(403).send("Invalid Permissions");
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
}

export default authenticate(handler);
