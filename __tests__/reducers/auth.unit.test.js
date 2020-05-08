import auth from '@reducers/auth';
import { AUTH_USER, USER_LOADED, DEAUTH_USER } from '@actions/types';

it('handles action of type AUTH_USER', () => {
  const action = {
    type: AUTH_USER,
    payload: 'test_token'
  };

  const newState = auth({}, action);

  expect(newState).toEqual({ token: 'test_token', isAuthenticated: true });
});

it('handles action of type USER_LOADED', () => {
  const action = {
    type: USER_LOADED,
    payload: 'test_user'
  };

  const newState = auth({}, action);

  expect(newState).toEqual({ user: 'test_user', isAuthenticated: true });
});

it('handles action of type DEAUTH_USER', () => {
  const action = {
    type: DEAUTH_USER
  };

  const newState = auth({}, action);

  expect(newState).toEqual({ token: null, isAuthenticated: false, user: null });
});
