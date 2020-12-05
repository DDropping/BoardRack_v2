import axios from "axios";

import { store } from "../store";
import {
  UPDATE_POSTS,
  UPDATE_NUMBER_OF_RESULTS_FOUND,
  UPDATE_IS_SEARCH_LOADING,
  UPDATE_IS_SEARCH_ERROR,
} from "./types";
import baseUrl from "../utils/baseUrl";

/*********** FETCH POSTS WITH FILTERS AND TEXT SEARCH ***********/
export const fetchPosts = () => async (dispatch) => {
  //get filter queries
  const { lat, lng } = await store.getState().currentLocation.location;
  const {
    sort,
    currentPage,
    resultsPerPage,
    numberOfResultsFound,
    price,
    textSearch,
    boardType,
    condition,
    length,
    width,
    depth,
    volume,
    distance,
  } = await store.getState().filters;

  //reset posts and toggle isLoading
  await dispatch({ type: UPDATE_IS_SEARCH_LOADING, payload: true });
  await dispatch({ type: UPDATE_POSTS, payload: [] });
  try {
    //set headers for request
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //stringify the form items
    const filtersData = {
      sort,
      currentPage,
      resultsPerPage,
      numberOfResultsFound,
      textSearch,
      price,
      boardType,
      condition,
      length,
      width,
      depth,
      volume,
      distance,
      lat,
      lng,
    };
    const body = JSON.stringify(filtersData);
    //fetch posts
    const url = `${baseUrl}/api/posts/postdetails`;
    const res = await axios.post(url, body, config);
    await dispatch({ type: UPDATE_POSTS, payload: res.data.posts });
    await dispatch({
      type: UPDATE_NUMBER_OF_RESULTS_FOUND,
      payload: res.data.totalNumberOfResults,
    });
  } catch (err) {
    await dispatch({ type: UPDATE_IS_SEARCH_ERROR, payload: true });
  } finally {
    await dispatch({ type: UPDATE_IS_SEARCH_LOADING, payload: false });
  }
};
