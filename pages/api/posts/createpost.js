import connectDb from "../../../utils/connectDb";
import Post from "../../../models/Post";
import User from "../../../models/User";

import authenticate from "../../../middleware/auth";

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

// @route   POST api/posts/createpost
// @desc    create new post in db
// @res     post{...postItems}
// @access  Protected
async function handlePostRequest(req, res) {
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
    location,
    phone,
    email,
  } = req.body;

  const postFields = {};
  postFields.user = req.user.id;
  postFields.date = Date.now();
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

  let length = 0;
  if (lengthFt) postFields.lengthFt = lengthFt;
  if (lengthIn) postFields.lengthIn = lengthIn;
  if (lengthFt) length += 12 * lengthFt;
  if (lengthIn) length += eval(lengthIn.trim().replace(" ", "+"));
  if (lengthFt || lengthIn) postFields.lengthValue = length;
  if (width) postFields.width = width;
  if (width) postFields.widthValue = eval(width.trim().replace(" ", "+"));
  if (depth) postFields.depth = depth;
  if (depth) postFields.depthValue = eval(depth.trim().replace(" ", "+"));
  if (volume) postFields.volume = volume;
  if (volume) postFields.volumeValue = eval(volume.trim().replace(" ", "+"));

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

  //build contact object
  postFields.contactMethods = {};
  postFields.contactMethods.message = true;
  if (phone) postFields.contactMethods.phone = phone;
  if (email) postFields.contactMethods.email = email;

  try {
    //update exisiting post
    if (req.body._id) {
      let post = await Post.findById(req.body._id);
      if (post.user.toString() === req.user.id.toString()) {
        let updatedPost = await Post.findByIdAndUpdate(
          req.body._id,
          postFields
        );
        res.json(updatedPost);
      } else {
        return res.status(401).send("Not Authorized");
      }
    }
    //create new post
    else {
      //create and save post
      let post = new Post(postFields);
      await post.save();

      //update and save post id in User.posts[]
      const user = await User.findById(req.user.id);
      user.posts.unshift(post._id);
      await user.save();

      res.json(post);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export default authenticate(handler);
