import connectDb from "../../../../utils/ConnectDb";
import Post from "../../../../models/Post";
import "../../../../models/User";

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
  const {
    price,
    boardType,
    condition,
    length,
    width,
    depth,
    volume,
  } = req.body;

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
  //configure length query
  length.min = length.min_ft * 12 + length.min_in;
  length.max = length.max_ft * 12 + length.max_in;
  if (!length.any && length.min && length.max && length.min <= length.max) {
    filterData.lengthValue = { $gte: length.min, $lte: length.max };
  } else if (!length.any && length.min && !length.max) {
    filterData.lengthValue = { $gte: length.min };
  } else if (!length.any && !length.min && length.max) {
    filterData.lengthValue = { $lte: length.max };
  }
  //configure width query
  if (!width.any && width.min && width.max && width.min <= width.max) {
    filterData.widthValue = { $gte: width.min, $lte: width.max };
  } else if (!width.any && width.min && !width.max) {
    filterData.widthValue = { $gte: width.min };
  } else if (!width.any && !width.min && width.max) {
    filterData.widthValue = { $lte: width.max };
  }
  //configure depth query
  if (!depth.any && depth.min && depth.max && depth.min <= depth.max) {
    filterData.depthValue = { $gte: depth.min, $lte: depth.max };
  } else if (!depth.any && depth.min && !depth.max) {
    filterData.depthValue = { $gte: depth.min };
  } else if (!depth.any && !depth.min && depth.max) {
    filterData.depthValue = { $lte: depth.max };
  }
  //configure volume query
  if (!volume.any && volume.min && volume.max && volume.min <= volume.max) {
    filterData.volumeValue = { $gte: volume.min, $lte: volume.max };
  } else if (!volume.any && volume.min && !volume.max) {
    filterData.volumeValue = { $gte: volume.min };
  } else if (!volume.any && !volume.min && volume.max) {
    filterData.volumeValue = { $lte: volume.max };
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
