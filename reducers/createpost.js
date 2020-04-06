import { SET_INPUT } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_INPUT:
      return {
        ...state,
        [payload.name]: payload.value
      };
    default:
      return state;
  }
}
