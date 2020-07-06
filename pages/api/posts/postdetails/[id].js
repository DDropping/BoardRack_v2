import connectDb from "../../../../utils/ConnectDb";
import Post from "../../../../models/Post";

connectDb();

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    default:
      res
        .status(405)
        .send(`Method ${req.method} not allowed`)
        .populate("user", "username");
      break;
  }
};

// @route   Get api/posts/postdetails/:id
// @desc    Retrieve post by id
// @access  Public
async function handleGetRequest(req, res) {
  const {
    query: { id },
  } = req;
  try {
    const post = await Post.findById(id).populate("user", "username");
    res.status(200).json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default handler;
