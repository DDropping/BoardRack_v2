import connectDb from "../../../../utils/connectDb";
import Post from "../../../../models/Post";
import User from "../../../../models/User";

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

  const { isInappropriate, isInsensitive, isScam, message } = req.body;
  const inappropriateInc = isInappropriate ? 1 : 0;
  const insensitiveInc = isInsensitive ? 1 : 0;
  const scamInc = isScam ? 1 : 0;

  try {
    const post = await Post.findByIdAndUpdate(id, {
      $inc: {
        "reportLog.inappropriate": inappropriateInc,
        "reportLog.insensitive": insensitiveInc,
        "reportLog.scam": scamInc,
      },
      $push: { "reportLog.messages": message },
    });
    if (!post) res.status(404).send("Post Not Found");

    res.status(200).send("Report Filed");
  } catch (err) {
    res.status(500).send("Server Error");
  }
}

export default handler;
