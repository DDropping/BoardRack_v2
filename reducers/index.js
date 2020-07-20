import { combineReducers } from "redux";

import auth from "./auth";
import overlays from "./overlays";
import createPostForm from "./createPostForm";
import imgUpload from "./imgUpload";
import currentLocation from "./currentLocation";
import filters from "./filters";
import util from "./util";

export default combineReducers({
  auth,
  currentLocation,
  createPostForm,
  imgUpload,
  overlays,
  filters,
  util,
});
