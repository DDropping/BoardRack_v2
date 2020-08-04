import mongoose from "mongoose";

const { String, Date, Number } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema({
  role: {
    type: String,
    default: "user",
    required: true,
    enum: ["user", "shop", "shaper", "admin", "root"],
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  location: {
    lat: { type: Number },
    lng: { type: Number },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    address: { type: String },
    postalCode: { type: String },
    locationImage: { type: String },
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "message",
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
  operatingHours: {
    sunday: {
      type: String,
    },
    monday: {
      type: String,
    },
    tuesday: {
      type: String,
    },
    wednesday: {
      type: String,
    },
    thursday: {
      type: String,
    },
    friday: {
      type: String,
    },
    saturday: {
      type: String,
    },
  },
  website: {
    type: String,
  },
  contactEmail: {
    type: String,
  },
  contactPhone: {
    type: String,
  },
});

export default mongoose.models.user || mongoose.model("user", UserSchema);
