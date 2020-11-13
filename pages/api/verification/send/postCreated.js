import connectDb from "../../../../utils/ConnectDb";

const nodemailer = require("nodemailer");
import generateInline from "../../../../templates/notifyPostCreated";

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
  const { userEmail, postUrl } = req.body;

  try {
    var transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let htmlBody = generateInline(postUrl);

    var mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: "Post Created",
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
