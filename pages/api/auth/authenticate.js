// @route   POST api/accounts
// @desc    register new account (username, email, password, userType)
// @access  Public
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import connectDb from '../../../utils/connectDb';
import User from '../../../models/User';

connectDb();

export default async (req, res) => {};
