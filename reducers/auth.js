import { AUTH_USER } from '../actions/types';

const initialState = {
  //token: localStorage.getItem('token'),
  isAuthenticated: false
  // isLoading: true,
  // user: null,
  // registrationErrors: [],
  // loginErrors: [],
  // isRegisterButtonLoading: false,
  // isLoginButtonLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
