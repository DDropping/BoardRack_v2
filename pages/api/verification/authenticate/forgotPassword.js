const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

import connectDb from "../../../../utils/ConnectDb";
import User from "../../../../models/User";

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

// @route   PATCH api/verification/authenticate/forgotPassword
// @desc    update user password given reset token and new password
// @res
// @access  Public
async function handlePatchRequest(req, res) {
  try {
    const { token, password } = req.body;

    //verify token is valid
    const { verifyUserId, basis } = jwt.verify(token, process.env.JWT_SECRET);

    //verify token is of correct type
    if (basis !== "password_reset") {
      return res.status(400).send("Password Change Request Failed");
    }

    //encrypt the new password
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    //update user with new password
    let data = await User.findByIdAndUpdate(
      verifyUserId,
      { password: encryptedPassword },
      { new: true }
    );

    if (!data) {
      return res.status(400).send("Password Change Request Failed");
    }
    res.status(200).send("Password Successfully Reset");
  } catch (err) {
    res.status(500).send("Server Error");
  }
}

export default handler;
