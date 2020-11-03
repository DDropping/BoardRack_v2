import {
  AUTH_USER,
  USER_LOADED,
  DEAUTH_USER,
  UPDATE_USER_POSTS,
  UPDATE_USER_FAVORITES_ADD,
  UPDATE_USER_FAVORITES_REMOVE,
  UPDATE_USER_MESSAGES,
  DELETE_MESSAGE_THREAD,
  UPDATE_USER_PROFILE_IMAGE,
  DELETE_POST,
} from "../actions/types";
import cookie from "js-cookie";

const initialState = {
  token: cookie.get("token"),
  isAuthenticated: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    // update token
    case AUTH_USER:
      cookie.set("token", action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    //update user data
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    //logout user
    case DEAUTH_USER:
      cookie.remove("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
      };
    case UPDATE_USER_POSTS:
      return {
        ...state,
        user: {
          ...state.user,
          posts: state.user.posts.map((post) =>
            post._id === action.payload._id ? action.payload : post
          ),
        },
      };
    case UPDATE_USER_FAVORITES_ADD:
      return {
        ...state,
        user: {
          ...state.user,
          favorites: [...state.user.favorites, action.payload],
        },
      };
    case UPDATE_USER_FAVORITES_REMOVE:
      return {
        ...state,
        user: {
          ...state.user,
          favorites: state.user.favorites.filter(
            (item) => item._id !== action.payload
          ),
        },
      };
    case UPDATE_USER_MESSAGES:
      return {
        ...state,
        user: {
          ...state.user,
          messages: action.payload,
        },
      };
    case DELETE_MESSAGE_THREAD:
      return {
        ...state,
        user: {
          ...state.user,
          messages: state.user.messages.filter(
            (item) => item._id !== action.payload
          ),
        },
      };
    case UPDATE_USER_PROFILE_IMAGE:
      return {
        ...state,
        user: {
          ...state.user,
          profileImage: action.payload,
        },
      };
    case DELETE_POST:
      return {
        ...state,
        user: {
          ...state.user,
          posts: state.user.posts.filter((item) => item._id !== action.payload),
        },
      };
    default:
      return state;
  }
}
