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

// @route   PATCH api/messages/deletemessagethread/[id]
// @desc    remove message _id from user's messages array
// @res
// @access  Protected
async function handlePatchRequest(req, res) {
  const {
    query: { id },
  } = req;

  try {
    //update user model
    let user = await User.findByIdAndUpdate(
      req.user.id,
      {
        $pull: { messages: id },
      },
      function (err, result) {
        if (err) {
          res.status(404).send("user not found");
        }
      }
    );
    res.send(user);
  } catch (err) {
    res.status(500).send("Server Error");
  }
}

export default authenticate(handler);
