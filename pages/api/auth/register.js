// @route   POST api/accounts
// @desc    register new account (username, email, password, role)
// @access  Public

import connectDb from '../../../utils/connectDb';
import User from '../../../models/User';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

connectDb();

export default async (req, res) => {
  const { username, email, password, confirmPassword, role } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({
      errors: [{ msg: 'Passwords do not match' }]
    });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        errors: [{ msg: 'Email is already associated with an account' }]
      });
    }

    user = new User({
      username,
      email,
      password,
      role
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

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
};
