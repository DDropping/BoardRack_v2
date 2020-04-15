import {
  SET_INPUT,
  CANCEL_POST,
  TOGGLE_CREATE_POST_LOADING
} from '../actions/types';

const initialState = {
  isLoading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CREATE_POST_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
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
