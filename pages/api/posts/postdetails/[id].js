import connectDb from "../../../../utils/ConnectDb";
import Post from "../../../../models/Post";
import "../../../../models/User";

connectDb();

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
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
    const post = await Post.findById(id).populate(
      "user",
      "username profileImage"
    );
    if (!post) {
      return res.status(404).send("Post Not Found");
    }
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post Not Found" });
    }
    res.status(500).send("Server Error");
  }
}

export default handler;
