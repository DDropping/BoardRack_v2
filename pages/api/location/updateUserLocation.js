import jwt from 'jsonwebtoken';

import connectDb from '../../../utils/ConnectDb';
import User from '../../../models/User';

connectDb();

export default async (req, res) => {
  switch (req.method) {
    case 'PUT':
      await handlePutRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

// @route   PUT api/location/updateUserLocation
// @desc    Update users default location
// @res     -
// @access  Protected
async function handlePutRequest(req, res) {
  if (!('authorization' in req.headers)) {
    return res.status(401).send('No authorization token');
  }

  try {
    //get user id
    const decodedUser = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    //update account
    const id = decodedUser.user.id;
    const update = req.body;
    await User.findByIdAndUpdate(id, update);
    res.json({ msg: 'Account Updated' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}
