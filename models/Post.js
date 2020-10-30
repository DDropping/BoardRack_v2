import mongoose from "mongoose";

const { String, Date, Number } = mongoose.Schema.Types;

const PostSchema = new mongoose.Schema({
  isVisible: { type: Boolean, default: true },
  isAvailable: { type: Boolean, default: true },
  isSold: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  title: { type: String, required: true },
  price: { type: String, required: true },
  boardType: { type: String },
  condition: { type: String },
  description: { type: String },
  tail: { type: String },
  finSystem: { type: String },
  finConfiguration: { type: String },
  lengthFt: { type: String },
  lengthIn: { type: String },
  lengthValue: { type: Number },
  width: { type: String },
  widthValue: { type: Number },
  depth: { type: String },
  depthValue: { type: Number },
  volume: { type: String },
  volumeValue: { type: Number },
  construction: { type: String },
  glassing: { type: String },
  contour: { type: String },
  waveSize: { type: String },
  drive: { type: String },
  paddlePower: { type: String },
  movability: { type: String },
  shaper: { type: String },
  model: { type: String },
  contactMethods: {
    message: { type: Boolean, default: true },
    phone: { type: String, default: null },
    email: { type: String, default: null },
  },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    postalCode: { type: String },
    locationImage: { type: String },
  },
  images: [
    {
      thumbnail: String,
      standard: String,
    },
  ],
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  viewCount: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  reportLog: {
    inappropriate: { type: Number, default: 0 },
    insensitive: { type: Number, default: 0 },
    scam: { type: Number, default: 0 },
  },
});

export default mongoose.models.post || mongoose.model("post", PostSchema);
