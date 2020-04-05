//returns jwt

import connectDb from '../../../utils/connectDb';
import User from '../../../models/User';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

connectDb();

export default async (req, res) => {
  const { email, password } = req.body;

  try {
    //check if user exists
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(404).send('Invalid Credentials');
    }

    //verify credentials
    const passwordsMatch = await bcrypt.compare(password, user.password);

    //generate token
    if (passwordsMatch) {
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
    } else {
      res.status(401).send('Invalid Credentials');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
