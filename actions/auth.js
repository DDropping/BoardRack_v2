import axios from 'axios';
import cookie from 'js-cookie';

import setTokenHeader from '../utils/setTokenHeader';
import { AUTH_USER, USER_LOADED } from './types';
import baseUrl from '../utils/baseUrl';

/*********** LOGIN USER ***********/
export const loginUser = ({ email, password }) => async dispatch => {
  //Clear errors Change Register button to loading
  dispatch({ type: CLEAR_ERRORS });
  dispatch({ type: TOGGLE_LOGIN_BUTTON_LOADING, payload: true });

  //set headers for request
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //stringify the form items
  const body = JSON.stringify({ email, password });

  //post new account to DB
  try {
    const res = await axios.post('/api/auth', body, config);

    //successful login
    dispatch({ type: AUTH_USER, payload: res.data.token });
    dispatch(loadUser());
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: TOGGLE_LOGIN_BUTTON_LOADING, payload: false });
    dispatch({ type: TOGGLE_LOGIN_MODAL });
    dispatch({ type: CLOSE_NAV_DRAWER });
    successNotification('Login Successful!', 'You Are Now Logged In', 3);
    dispatch(reset('login'));
  } catch (e) {
    //failed login
    const errors = e.response.data.errors;
    if (errors) {
      errors.forEach(error =>
        dispatch({ type: LOGIN_ERROR, payload: error.msg })
      );
    }

    dispatch({ type: AUTH_USER_FAIL });
    dispatch({ type: TOGGLE_LOGIN_BUTTON_LOADING, payload: false });
  }
};

/*********** LOAD USER ***********/
export const loadUser = () => async dispatch => {
  try {
    if (cookie.get('token')) {
      //add/remove jwt in axios default header
      const token = cookie.get('token');
      setTokenHeader(token);
      //get user data & store in redux
      const url = `${baseUrl}/api/auth/accountData`;
      const res = await axios.get(url);
      const user = res.data;
      dispatch({ type: USER_LOADED, payload: user });
    }
    // if (res.data.location) {
    //   dispatch({ type: USER_LOADED_SET_LOCATION, payload: res.data.location });
    // }
  } catch (err) {
    console.log(err);
  }
};
