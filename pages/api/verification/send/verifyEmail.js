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

// @route   POST api/verification/send/verifyEmail
// @desc    send user email with link to verify their registered email address
// @res
// @access  Public
async function handlePostRequest(req, res) {
  try {
    const { userEmail, userId } = req.body;

    //create JWT to store user id
    const payload = {
      verifyUserId: userId,
    };
    const verificationToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    //create verification link with jwt
    const verificationLink = `${baseUrl}/verify/email?token=${verificationToken}`;

    //create inline html with verificationLink embedded
    let htmlBody = generateInline(verificationLink);

    //create nodemailer instance
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `BoardRack Verify <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: "Verify your email",
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
