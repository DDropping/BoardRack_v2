import axios from "axios";
import cookie from "js-cookie";

import { store } from "../store";
import setTokenHeader from "../utils/setTokenHeader";
import {
  USER_LOADED,
  LOAD_DEFAULT_LOCATION_TO_CURRENT,
  UPDATE_USER_NOTIFICATIONS,
} from "./types";
import baseUrl from "../utils/baseUrl";

/*********** LOAD USER ***********/
export const loadUserByCookie = () => async (dispatch) => {
  try {
    if (cookie.get("token")) {
      //add/remove jwt in axios default header
      const token = cookie.get("token");
      setTokenHeader(token);
      //get user data & store in redux
      const url = `${baseUrl}/api/auth/accountData`;
      const res = await axios.get(url);
      const user = res.data;
      dispatch({ type: USER_LOADED, payload: user });
      dispatch(checkUserNotifications(user));
      if (user.location) {
        dispatch({
          type: LOAD_DEFAULT_LOCATION_TO_CURRENT,
          payload: user.location,
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

/*********** UPDATE USER IN REDUX STORE ***********/
export const loadUserByProps = (user) => async (dispatch) => {
  try {
    await dispatch({ type: USER_LOADED, payload: user });
    dispatch(checkUserNotifications(user));
    if (
      !store.getState().currentLocation.isLocated &&
      store.getState().auth.user.location
    ) {
      dispatch({
        type: LOAD_DEFAULT_LOCATION_TO_CURRENT,
        payload: store.getState().auth.user.location,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

/*********** CHECK IF USER HAS ANY UNSEEN NOTIFICATIONS ***********/
export const checkUserNotifications = (user) => async (dispatch) => {
  try {
    // `messages` is absent for a user with no threads, which previously threw
    // and silently skipped the notification dispatch entirely.
    let messageNotifications = (user.messages || []).filter((messageData) => {
      const thread = messageData.messages || [];
      const lastMessage = thread[thread.length - 1];
      return messageData.isRead === false && lastMessage?.from !== user._id;
    });
    messageNotifications = messageNotifications.map((item) => item._id);
    //add more notification counters here

    let notifications = {
      messages: messageNotifications,
    };

    await dispatch({
      type: UPDATE_USER_NOTIFICATIONS,
      payload: notifications,
    });
  } catch (err) {
    console.log(err);
  }
};
