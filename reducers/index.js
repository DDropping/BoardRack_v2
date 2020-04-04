import { combineReducers } from 'redux';

import auth from './auth';
import overlays from './overlays';

export default combineReducers({
  auth,
  overlays
});
