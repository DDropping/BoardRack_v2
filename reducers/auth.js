import { AUTH_USER, USER_LOADED, DEAUTH_USER } from '../actions/types';
import cookie from 'js-cookie';

const initialState = {
  token: cookie.get('token'),
  isAuthenticated: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    // update token
    case AUTH_USER:
      cookie.set('token', action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true
      };
    //update user data
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    //logout user
    case DEAUTH_USER:
      cookie.remove('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
}
