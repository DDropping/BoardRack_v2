import { combineReducers } from 'redux';

import auth from './auth';
import overlays from './overlays';
import createpost from './createpost';

export default combineReducers({
  auth,
  createpost,
  overlays
});
