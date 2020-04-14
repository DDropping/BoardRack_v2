import axios from 'axios';

import baseUrl from '../utils/baseUrl';
import { store } from '../store';
import { UpdateDefaultLocationNotification } from '../components/notifications';
import { loadUser } from './auth';
import {
  TOGGLE_MAP_LOADING,
  UPDATE_LOCATION_IMAGE,
  TOGGLE_LOCATION_LOADING,
  UPDATE_CURRENT_LOCATION
} from './types';

// GET USER'S LOCATION WITH IP --------------------------------------------------
export const getLocationWithIp = () => async dispatch => {
  try {
    const url = `${baseUrl}/api/location/ip`;
    const res = await axios.get(url);
    dispatch({ type: UPDATE_CURRENT_LOCATION, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

// GET USER'S LOCATION WITH LOCATION FORM ---------------------------------------
export const handleLocationForm = ({ value }) => async dispatch => {
  dispatch({ type: TOGGLE_LOCATION_LOADING, payload: true });

  const url = `${baseUrl}/api/location/locationForm`;
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ value });

  try {
    const res = await axios.post(url, body, config);
    console.log('location: ', res.data);
    dispatch({ type: UPDATE_CURRENT_LOCATION, payload: res.data });
    dispatch({ type: TOGGLE_LOCATION_LOADING, payload: false });

    //update user's default location if needed
    //check if user is logged in
    if (store.getState().auth.isAuthenticated) {
      var locationData = res.data;
      dispatch(checkToUpdateUserLocation({ locationData }));
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: TOGGLE_LOCATION_LOADING, payload: false });
  }
};

// GET USER'S LOCATION WITH GEOCODE ---------------------------------------------
export const handleGeolocation = ({ lat, lng }) => async dispatch => {
  const url = `${baseUrl}/api/location/geo`;
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ lat, lng });

  try {
    const res = await axios.post(url, body, config);
    dispatch({ type: UPDATE_CURRENT_LOCATION, payload: res.data });
    dispatch({ type: TOGGLE_LOCATION_LOADING, payload: false });

    //update user's default location if needed
    //check if user is logged in
    if (store.getState().auth.isAuthenticated) {
      var locationData = res.data;
      dispatch(checkToUpdateUserLocation({ locationData }));
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: TOGGLE_LOCATION_LOADING, payload: false });
  }
};

// CHECK TO UPDATE USER'S LOCATION IN DB / UPDATE USER'S LOCATION IN DB ----------------
//save location as user's default location if no location exists yet
export const checkToUpdateUserLocation = ({
  locationData
}) => async dispatch => {
  try {
    //check if it's required to retrieve image of user's location from developer.here API
    var lat = locationData.lat;
    var lng = locationData.lng;

    //if user doesnt have a location saved, get location image
    if (!store.getState().auth.user.location) {
      await dispatch(getLocationMap({ lat, lng }));
    } else {
      //if new location is greater than 1 mile(0.014degrees) away, retrieve new location image
      var latDistance = Math.abs(store.getState().auth.user.location.lat - lat);
      var lngDistance = Math.abs(store.getState().auth.user.location.lng - lng);
      if (latDistance > 0.014 && lngDistance > 0.014) {
        await dispatch(getLocationMap({ lat, lng }));
      }
    }

    const body = {
      location: {
        lat: locationData.lat,
        lng: locationData.lng,
        country: locationData.Country,
        state: locationData.State,
        city: locationData.City,
        postalCode: locationData.PostalCode,
        locationImage: store.getState().currentLocation.location.locationImage
      }
    };
    //if user doesn't have a saved location yet, save their current location to db
    if (!store.getState().auth.user.location) {
      dispatch(updateUserLocation(body));
    }
    //if user does have a location saved in db
    if (store.getState().auth.user.location) {
      //if new location is greater than 1 mile(0.014degrees) away, ask if user wants to save new location as default
      if (latDistance > 0.014 && lngDistance > 0.014) {
        UpdateDefaultLocationNotification(body);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

// UPDATE USER'S LOCATION IN DB -------------------------------------------------
export const updateUserLocation = location => async dispatch => {
  const url = `${baseUrl}/api/location/updateUserLocation`;
  try {
    await axios.put(url, location);
    dispatch(loadUser());
  } catch (err) {
    console.log(err);
  }
};

// GET USER'S LOCATION MAP IMAGE FROM DEVELOPER.HERE API ------------------------
export const getLocationMap = ({ lat, lng }) => async dispatch => {
  try {
    dispatch({ type: TOGGLE_MAP_LOADING, payload: true });
    //if user is logged in and lattitude and longitude are in temp location reducer in redux
    if (store.getState().auth.isAuthenticated) {
      const url = `${baseUrl}/api/location/locationMap`;
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = {
        lat,
        lng
      };

      const locationUrl = await axios.post(url, body, config);
      //update location image in temp location reducer
      await dispatch({
        type: UPDATE_LOCATION_IMAGE,
        payload: locationUrl.data
      });
      dispatch({ type: TOGGLE_MAP_LOADING, payload: false });
      return locationUrl.data;
    }
  } catch (err) {
    dispatch({ type: TOGGLE_MAP_LOADING, payload: false });
    console.log(err);
  }
};
