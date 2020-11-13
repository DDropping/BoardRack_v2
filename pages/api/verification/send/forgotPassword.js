const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

import connectDb from "../../../../utils/ConnectDb";
import User from "../../../../models/User";
import generateInline from "../../../../templates/verifyForgotPassword";
import baseUrl from "../../../../utils/baseUrl";

connectDb();

const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      await handlePostRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

// @route   POST api/verification/send/forgotPassword
// @desc    send user email with link to verify their registered email address
// @res
// @access  Public
async function handlePostRequest(req, res) {
  const { userEmail } = req.body;

  try {
    //verify user exists
    const user = User.findOne({ email: userEmail });
    if (!user) return res.status(400).send("Bad Request");

    //create JWT to store user id
    const payload = {
      verifyUserId: user._id,
      basis: "password_reset",
    };
    const verificationToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    //create verification link with jwt
    const passwordResetLink = `${baseUrl}/verify/resetPassword?token=${verificationToken}`;

    //genereate email html
    let htmlBody = generateInline(passwordResetLink);

    //create nodemailer instance
    var transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    var mailOptions = {
      from: `BoardRack <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: "New Message",
      html: htmlBody,
    };

    //send email
    let info = await transporter.sendMail(mailOptions);

    if (!info) {
      res.status(500).send("Could Not Send Email");
    }
    res.status(200).send("Email Sent");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default handler;
