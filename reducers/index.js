import { combineReducers } from 'redux';

import auth from './auth';
import overlays from './overlays';
import createpost from './createpost';
import imgUpload from './imgUpload';
import currentLocation from './currentLocation';

export default combineReducers({
  auth,
  currentLocation,
  createpost,
  imgUpload,
  overlays
});
