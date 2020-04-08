import { combineReducers } from 'redux';

import auth from './auth';
import overlays from './overlays';
import createpost from './createpost';
import imgUpload from './imgUpload';

export default combineReducers({
  auth,
  createpost,
  imgUpload,
  overlays
});
