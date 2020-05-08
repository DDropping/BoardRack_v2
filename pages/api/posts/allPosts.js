import connectDb from "../../../utils/ConnectDb";
import Post from "../../../models/Post";

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

// @route   GET api/posts/allposts
// @desc    retrieve all posts from db
// @res     posts: {... array of all posts}
// @access  Public
async function handleGetRequest(req, res) {
  const posts = await Post.find();
  res.status(200).json(posts);
}

export default handler;
