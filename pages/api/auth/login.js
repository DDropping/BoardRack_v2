import connectDb from "../../../utils/ConnectDb";
import User from "../../../models/User";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

// @route   POST api/auth/login
// @desc    Authenticate account in db (username, email)
// @res     jwt
// @access  Public
async function handlePostRequest(req, res) {
  const { email, password } = req.body;

  try {
    //check if user exists
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).send("Invalid Credentials");
    }

    //verify credentials
    const passwordsMatch = await bcrypt.compare(password, user.password);

    //generate token
    if (passwordsMatch) {
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
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default handler;
