import connectDb from "../../../../utils/ConnectDb";
import Post from "../../../../models/Post";
import "../../../../models/User";
import { min } from "moment";

connectDb();

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    case "POST":
      await handlePostRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

// @route   GET api/posts/postdetails
// @desc    retrieve all posts from db
// @res     posts: {... array of all posts}
// @access  Public
async function handleGetRequest(req, res) {
  try {
    const posts = await Post.find({ isVisible: true }).populate(
      "user",
      "username profileImage"
    );

    if (!posts) {
      return res.status(400).json({ msg: "There is no posts" });
    }

    res.status(200).json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

// @route   POST api/posts/postdetails
// @desc    retrieve all posts from db give set of filter parameters
// @res     posts: {... array of all posts}
// @access  Public
async function handlePostRequest(req, res) {
  const { price, boardType, condition } = req.body;

  let filterData = { isVisible: true };
  //configure price query
  if (!price.any && price.min && price.max && price.min <= price.max) {
    filterData.price = { $gte: price.min, $lte: price.max };
  } else if (!price.any && price.min && !price.max) {
    filterData.price = { $gte: price.min };
  } else if (!price.any && !price.min && price.max) {
    filterData.price = { $lte: price.max };
  }
  //configure board type query
  if (boardType.length > 0) {
    filterData.boardType = { $in: boardType };
  }
  //configure condition query
  if (condition.length > 0) {
    filterData.condition = { $in: condition };
  }

  try {
    const posts = await Post.find(filterData).populate(
      "user",
      "username profileImage"
    );

    if (!posts) {
      return res.status(400).json({ msg: "There is no posts" });
    }

    res.status(200).json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default handler;
