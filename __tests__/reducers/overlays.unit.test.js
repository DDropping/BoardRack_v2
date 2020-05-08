import overlays from '@reducers/overlays';
import { TOGGLE_LOGIN, TOGGLE_REGISTER } from '@actions/types';

const initialState = {
  isLogin: false,
  isRegister: false
};

it('handles action of type TOGGLE_LOGIN', () => {
  const action = {
    type: TOGGLE_LOGIN,
    payload: true
  };

  const newState = overlays({ isLogin: false }, action);

  expect(newState).toEqual({
    isLogin: true
  });
});

it('handles action of type TOGGLE_REGISTER', () => {
  const action = {
    type: TOGGLE_REGISTER,
    payload: true
  };

  const newState = overlays({ isRegister: false }, action);

  expect(newState).toEqual({
    isRegister: true
  });
});
