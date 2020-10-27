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

// @route   PATCH api/posts/hidepost/[id]
// @desc    toggle hide / show post
// @res
// @access  Protected
async function handlePatchRequest(req, res) {
  const {
    query: { id },
  } = req;

  try {
    //get post
    let postData = await Post.findById(id);

    //compare post author id to user id
    if (postData.user.toString() === req.user.id.toString()) {
      console.log("User Credentials Passed");

      //toggle post.isVisible
      postData.isVisible = !postData.isVisible;
      await postData.save();
      res.status(200).send(postData);
    } else {
      res.status(403).send("Invalid permissions");
    }
  } catch (err) {
    re.status(500).send("Server Error");
  }
}

export default authenticate(handler);
