import connectDb from '../../../utils/connectDb';
import Post from '../../../models/Post';

connectDb();

export default async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};
