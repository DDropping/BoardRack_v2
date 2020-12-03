import axios from "axios";

import {
  UPDATE_USER_FAVORITES_ADD,
  UPDATE_USER_FAVORITES_REMOVE,
} from "./types";

export const addFavorite = (postId) => async (dispatch) => {
  console.log("inside add favorite action");
  //set headers for request
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //stringify the form items
  const data = { postId: postId };
  const body = JSON.stringify(data);

  //update post to DB
  try {
    const res = await axios.put(
      "/api/posts/favorite/addFavorite",
      body,
      config
    );
    dispatch({ type: UPDATE_USER_FAVORITES_ADD, payload: res.data });
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

export const removeFavorite = (postId) => async (dispatch) => {
  //set headers for request
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //stringify the form items
  const data = { postId: postId };
  const body = JSON.stringify(data);

  //update post to DB
  try {
    await axios.put("/api/posts/favorite/removefavorite", body, config);
    dispatch({ type: UPDATE_USER_FAVORITES_REMOVE, payload: postId });
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

// addView() action not currently in use

// export const addView = (id) => async (dispatch) => {
//   //set headers for request
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   //stringify the form items
//   const postid = { postId: id };
//   const body = JSON.stringify(postid);

//   //update post to DB
//   try {
//     dispatch({ type: POST_VIEWED, payload: id });
//     await axios.put("/api/posts/addView", body, config);
//   } catch (err) {
//     if (err) {
//       console.log(err);
//     }
//   }
// };
