import connectDb from "../../../../utils/ConnectDb";
import Post from "../../../../models/Post";
import "../../../../models/User";

connectDb();

const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      await handlePostRequest(req, res);
      break;
    default:
      res
        .status(405)
        .send(`Method ${req.method} not allowed`)
        .populate("user", "username");
      break;
  }
};

// @route   POST api/posts/postdetails
// @desc    Retrieve post by id
// @access  Public
async function handlePostRequest(req, res) {
  const { postId, boardType, volumeValue } = req.body;

  let filterData = { isVisible: true };
  //configure volume query
  if (postId) {
    filterData._id = { $ne: postId };
  }
  if (volumeValue) {
    filterData.volumeValue = { $gte: volumeValue - 2, $lte: volumeValue + 2 };
  }
  if (boardType) {
    filterData.boardType = boardType;
  }

  try {
    let post = await Post.find(filterData)
      .limit(3)
      .populate("user", "username")
      .sort({ date: -1 });

    if (!post || post.length < 3) {
      post = await Post.find({ _id: { $ne: postId } })
        .limit(3)
        .populate("user", "username")
        .sort({ date: -1 });
    }

    if (!post || post.length < 3) {
      return res.status(400).json({ msg: "There is no post with this id" });
    }

    res.status(200).json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post Not Found" });
    }
    console.log(err);
    res.status(500).send("Server Error");
  }
}

export default handler;
