import User from "../../../models/User";
import "../../../models/Message";
import "../../../models/Post";
import connectDb from "../../../utils/ConnectDb";
import authenticate from "../../../middleware/auth";

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

// @route   GET api/auth/accountData
// @desc    use jwt in req header to retrieve user data from db
// @res     user: {... all user data from db}
// @access  Protected
async function handleGetRequest(req, res) {
  try {
    const populateQuery = [
      {
        path: "messages",
        populate: [
          { path: "post" },
          { path: "users", select: "username profileImage" },
        ],
      },
      { path: "favorites" },
      { path: "posts" },
    ];

    await User.findById(req.user.id, function (err, result) {
      if (err) {
        res.status(404).send("user not found");
      } else {
        res.status(200).json(result);
      }
    }).populate(populateQuery);
  } catch (err) {
    res.status(403).send("Invalid Token");
  }
}

export default authenticate(handler);
