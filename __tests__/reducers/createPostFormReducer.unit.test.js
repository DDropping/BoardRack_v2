import createPostFormReducer from '@reducers/createPostForm';
import {
  SET_INPUT,
  CANCEL_POST,
  TOGGLE_CREATE_POST_LOADING
} from '@actions/types';

it('handles action of type SET_INPUT', () => {
  const action = {
    type: SET_INPUT,
    payload: { name: 'test', value: 'test input' }
  };

  const newState = createPostFormReducer({}, action);

  expect(newState).toEqual({ test: 'test input' });
});

it('handles action of type CANCEL_POST', () => {
  const action = { type: CANCEL_POST };

  const newState = createPostFormReducer({}, action);

  expect(newState).toEqual({ isLoading: false });
});

it('handles action of type TOGGLE_CREATE_POST_LOADING', () => {
  const action = { type: TOGGLE_CREATE_POST_LOADING, payload: true };

  const newState = createPostFormReducer({}, action);

  expect(newState).toEqual({ isLoading: true });
});

it('handles action of unknown type', () => {
  const action = {};

  const newState = createPostFormReducer({}, action);

  expect(newState).toEqual({});
});
