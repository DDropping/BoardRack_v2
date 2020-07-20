import { ADD_VIEW } from "../actions/types";

const initialState = {
  viewedPosts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_VIEW:
      return {
        ...state,
        viewedPosts: [...state.viewedPosts, action.payload],
      };
    default:
      return state;
  }
}
