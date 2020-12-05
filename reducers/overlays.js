import { TOGGLE_LOGIN, TOGGLE_REGISTER } from "../actions/types";

const initialState = {
  isLogin: false,
  isRegister: false,
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    case TOGGLE_REGISTER:
      return {
        ...state,
        isRegister: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
