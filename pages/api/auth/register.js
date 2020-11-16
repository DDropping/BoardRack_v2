const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";

import generateInline from "../../../templates/verifyEmail";
import baseUrl from "../../../utils/baseUrl";
import connectDb from "../../../utils/ConnectDb";
import User from "../../../models/User";
import Message from "../../../models/Message";

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

// @route   POST api/auth/register
// @desc    register new account in db (username, email, password, role)
// @res     jwt
// @access  Public
async function handlePostRequest(req, res) {
  const { username, email, password, confirmPassword, role } = req.body;

  try {
    //validate username email and password
    if (!isLength(username, { min: 3, max: 15 })) {
      return res.status(422).send("Username must be 3-15 characters");
    } else if (!isLength(password, { min: 6 })) {
      return res
        .status(422)
        .send("Password must be at least 6 characters long");
    } else if (!isEmail(email)) {
      return res.status(422).send("Invalid email");
    } else if (password !== confirmPassword) {
      return res.status(422).send("Passwords do not match");
    }

    //check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(422).send("Email is already registered to an account");
    }

    //create user
    user = new User({
      username,
      email,
      password,
      role,
      date: Date.now(),
    });

    //encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    //send welcome message to user from BoardRack
    const messageBody =
      "Hello, welcome to BoardRack! " +
      "Before you get started theres a few things you should know. " +
      "This website is only demo since BoardRack is still in development. " +
      "Thus, any posts you view should not be considered real and are only for demonstrative purposes. " +
      "Also, filtering by location has been disabled as all demostrative posts will be located in the San Francisco Bay Area. " +
      "And all posts flagged for deletion will not be removed after the designated 7 day wait. However, active posts will still remain editable. " +
      "Thank you for visiting the site and if you have any questions, encounter any bugs, or just want say hi, please respond here!";

    const message = {
      from: "5fac56be274e5e1f5813c07d",
      body: messageBody,
      timeSent: Date.now(),
    };

    const newMessageThread = {
      type: "support",
      users: [user._id, "5fac56be274e5e1f5813c07d"],
      post: null,
      dateCreated: Date.now(),
      lastUpdated: Date.now(),
      isRead: false,
      messages: [message],
    };

    let messageThread = new Message(newMessageThread);
    await messageThread.save();

    //save to users messages[]
    user.messages = [messageThread._id];

    //save user to db
    await user.save();

    //send "verify your email" to user's email address
    try {
      const verifyEmailPayload = {
        verifyUserId: user._id,
      };
      const verificationToken = jwt.sign(
        verifyEmailPayload,
        process.env.JWT_SECRET
      );

      const verificationLink = `${baseUrl}/verify/email?token=${verificationToken}`;

      let htmlBody = generateInline(verificationLink);

      const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `BoardRack <${process.env.EMAIL_USER}>`,
        to: user.email,
        subject: "Verify your email",
        html: htmlBody,
      };

      //send email
      await transporter.sendMail(mailOptions);
    } catch (err) {
      console.log("Failed to send verification email");
    }

    //create JWT
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default handler;
