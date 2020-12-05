const jwt = require("jsonwebtoken");

import connectDb from "../../../../utils/connectDb";
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

// @route   PATCH api/verification/authenticate/verifyEmail/[token]
// @desc    send user email with link to verify their registered email address
// @res
// @access  Public
async function handlePatchRequest(req, res) {
  try {
    const token = req.body.token;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    let user = await User.findByIdAndUpdate(
      decoded.verifyUserId,
      { emailConfirmed: true },
      { new: true }
    );

    if (!user) res.status(400).send("Verification Failed");
    res.status(200).send("Email Verified Successfully");
  } catch (err) {
    res.status(500).send("Verification Failed");
  }
}

export default handler;
