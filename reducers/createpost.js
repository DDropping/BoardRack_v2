import { SET_INPUT, CANCEL_POST } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_INPUT:
      return {
        ...state,
        [payload.name]: payload.value
      };
    case CANCEL_POST:
      return {
        initialState
      };
    default:
      return state;
  }
}
