import connectDb from "../../../utils/ConnectDb";
import User from "../../../models/User";
const bcrypt = require("bcryptjs");
import isEmail from "validator/lib/isEmail";
import authenticate from "../../../middleware/auth";

connectDb();

const handler = async (req, res) => {
  switch (req.method) {
    case "PATCH":
      await handlePatchRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

// @route   PATCH api/auth/register
// @desc    register new account in db (username, email, password, role)
// @res     jwt
// @access  Public
async function handlePatchRequest(req, res) {
  const { password, newPassword } = req.body;

  const userId = req.user.id;
  var updates = {};
  const options = { new: true };

  var passwordsMatch = false;

  try {
    //check if user exists
    const user = await User.findById(userId).select("+password");
    if (!user) {
      return res
        .status(404)
        .send(
          "Uhh oh, something went wrong. We couldn't update your account at this time."
        );
    }

    // if password change request, verify credentials
    if (password && newPassword) {
      passwordsMatch = await bcrypt.compare(password, user.password);

      //encrypt new password and add to updates object
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(newPassword, salt);

      if (!passwordsMatch) {
        return res
          .status(401)
          .send("Invalid password, please check password and try again.");
      }
    }

    //Create updates object
    if (req.body.email && isEmail(req.body.email))
      updates.email = req.body.email;
    if (req.body.profileImage) updates.profileImage = req.body.profileImage;

    //update user data
    const result = await User.findByIdAndUpdate(userId, updates, options);
    res.status(200).json(result);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .send("Uhh oh, something went wrong. Your account was not updated.");
  }
}

export default authenticate(handler);
