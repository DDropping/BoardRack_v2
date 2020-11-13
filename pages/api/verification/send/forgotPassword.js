import connectDb from "../../../../utils/ConnectDb";

const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
import generateInline from "../../../../templates/verifyEmail";
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
  const { userEmail, userId } = req.body;

  try {
    var transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    var mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: "Reset Password",
      text: "That was easy!",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default handler;
