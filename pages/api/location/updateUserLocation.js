import connectDb from "../../../utils/ConnectDb";
import User from "../../../models/User";
import authenticate from "../../../middleware/auth";

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

// @route   PUT api/location/updateUserLocation
// @desc    Update users default location
// @res     -
// @access  Protected
async function handlePutRequest(req, res) {
  try {
    //update account
    const id = req.user.id;
    const update = req.body;
    await User.findByIdAndUpdate(id, update);
    res.json({ msg: "Account Updated" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default authenticate(handler);
