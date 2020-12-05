import connectDb from "../../../../utils/connectDb";
import Post from "../../../../models/Post";

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

// @route   PUT api/posts/addView
// @desc    Increase viewcount of post by +1
// @access  Public
async function handlePutRequest(req, res) {
  const {
    query: { id },
  } = req;
  try {
    const post = await Post.findByIdAndUpdate(id, { $inc: { viewCount: 1 } });
    if (!post) res.status(404).send("Post Not Found");

    res.status(200).send("Post Viewed");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default handler;
