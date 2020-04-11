// @route   POST api/auth/register
// @desc    register new account in db (username, email, password, role)
// @res     jwt
// @access  Public

import connectDb from '../../../utils/ConnectDb';
import User from '../../../models/User';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

connectDb();

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await handlePostRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

async function handlePostRequest(req, res) {
  const { username, email, password, confirmPassword, role } = req.body;

  try {
    //validate username email and password
    if (!isLength(username, { min: 3, max: 15 })) {
      return res.status(422).send('Username must be 3-15 characters');
    } else if (!isLength(password, { min: 6 })) {
      return res
        .status(422)
        .send('Password must be at least 6 characters long');
    } else if (!isEmail(email)) {
      return res.status(422).send('Invalid email');
    } else if (password !== confirmPassword) {
      return res.status(422).send('Passwords do not match');
    }

    //check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(422).send('Email is already registered to an account');
    }

    //create user
    user = new User({
      username,
      email,
      password,
      role
    });

    //encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    //save user to db
    await user.save();

    //create JWT
    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '7d' },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}
