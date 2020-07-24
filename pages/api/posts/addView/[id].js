import connectDb from "../../../../utils/ConnectDb";
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
    const post = await Post.findById(id);

    //increment post viewCount and save
    post.viewCount++;
    await post.save();
    res.send("Post " + id + " opened.");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default handler;
