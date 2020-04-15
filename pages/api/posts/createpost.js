// @route   POST api/posts/createpost
// @desc    create new post in db
// @res     post: {... all post data}
// @access  Protected

import jwt from 'jsonwebtoken';

import connectDb from '../../../utils/ConnectDb';
import Post from '../../../models/Post';

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

// @route   POST api/posts/createpost
// @desc    create new post in db
// @res     post{...postItems}
// @access  Protected
async function handlePostRequest(req, res) {
  if (!('authorization' in req.headers)) {
    return res.status(401).send('No authorization token');
  }
  const decodedUser = jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET
  );

  const {
    title,
    price,
    boardType,
    condition,
    description,
    tail,
    finSystem,
    finConfiguration,
    lengthFt,
    lengthIn,
    width,
    depth,
    volume,
    construction,
    glassing,
    contour,
    waveSize,
    drive,
    paddlePower,
    movability,
    shaper,
    model,
    images,
    location
  } = req.body;

  console.log(location);
  const postFields = {};
  postFields.user = decodedUser.user.id;
  if (title) postFields.title = title;
  if (price) postFields.price = price;
  if (boardType) postFields.boardType = boardType;
  if (condition) postFields.condition = condition;
  if (description) postFields.description = description;
  if (tail) postFields.tail = tail;
  if (finSystem) postFields.finSystem = finSystem;
  if (finConfiguration) postFields.finConfiguration = finConfiguration;
  if (construction) postFields.construction = construction;
  if (glassing) postFields.glassing = glassing;
  if (contour) postFields.contour = contour;
  if (waveSize) postFields.waveSize = waveSize;
  if (drive) postFields.drive = drive;
  if (paddlePower) postFields.paddlePower = paddlePower;
  if (movability) postFields.movability = movability;
  if (shaper) postFields.shaper = shaper;
  if (model) postFields.model = model;

  if (lengthFt) postFields.lengthFt = lengthFt;
  if (lengthIn) postFields.lengthIn = lengthIn;
  if (width) postFields.width = width;
  if (depth) postFields.depth = depth;
  if (volume) postFields.volume = volume;

  //list of image urls
  if (images) postFields.images = images;

  //build location object
  postFields.location = {};
  if (location.lat) postFields.location.lat = location.lat;
  if (location.lng) postFields.location.lng = location.lng;
  if (location.country) postFields.location.country = location.country;
  if (location.state) postFields.location.state = location.state;
  if (location.city) postFields.location.city = location.city;
  if (location.postalCode) postFields.location.postalCode = location.postalCode;
  if (location.locationImage)
    postFields.location.locationImage = location.locationImage;

  try {
    let post = new Post(postFields);
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    re.status(500).send('Server Error');
  }
}
