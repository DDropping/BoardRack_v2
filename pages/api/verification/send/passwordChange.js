const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

import generateInline from "../../../../templates/notifyPasswordChange";
import baseUrl from "../../../../utils/baseUrl";

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
  const { username, userEmail, userId } = req.body;

  try {
    //create JWT to store user id
    const payload = {
      verifyUserId: userId,
      basis: "recover_account",
    };
    const verificationToken = jwt.sign(payload, process.env.JWT_SECRET);

    //create verification link with jwt
    const recoverAccountUrl = `${baseUrl}/verify/recoverAccount?token=${verificationToken}`;

    //generate email html
    let htmlBody = generateInline(username, recoverAccountUrl);

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
      subject: "Password Updated",
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
