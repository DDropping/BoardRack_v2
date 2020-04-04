import axios from 'axios';

import { AUTH_USER } from './types';

/*********** LOAD USER ***********/
// export const loadUser = () => async dispatch => {
//     if (localStorage.token) {
//       setAuthToken(localStorage.token);
//     }

//     try {
//       const res = await axios.get('/api/auth');
//       dispatch({ type: USER_LOADED, payload: res.data });
//       if (res.data.location) {
//         dispatch({ type: USER_LOADED_SET_LOCATION, payload: res.data.location });
//       }
//       //extra dispatch to force rerender so navbar can grab user.username
//     } catch (err) {
//       dispatch({ type: AUTH_ERROR });
//     }
//   };
