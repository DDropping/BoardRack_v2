// @route   GET api/auth/accountData
// @desc    use jwt in req header to retrieve user data from db
// @res     user: {... all user data from db}
// @access  Protected

import jwt from 'jsonwebtoken';

import User from '../../../models/User';
import connectDb from '../../../utils/ConnectDb';

connectDb();

export default async (req, res) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).send('No authorization token');
  }

  try {
    const decodedUser = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    const user = await User.findById(decodedUser.user.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send('user not found');
    }
  } catch (err) {
    res.status(403).send('Invalid Token');
  }
};
