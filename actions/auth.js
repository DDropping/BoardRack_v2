import axios from "axios";
import cookie from "js-cookie";

import { store } from "../store";
import setTokenHeader from "../utils/setTokenHeader";
import { USER_LOADED, LOAD_DEFAULT_LOCATION_TO_CURRENT } from "./types";
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
    }
    // if (res.data.location) {
    //   dispatch({ type: USER_LOADED_SET_LOCATION, payload: res.data.location });
    // }
  } catch (err) {
    console.log(err);
  }
};

/*********** UPDATE USER IN REDUX STORE ***********/
export const loadUserByProps = (user) => async (dispatch) => {
  try {
    await dispatch({ type: USER_LOADED, payload: user });
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
