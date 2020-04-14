import {
  UPDATE_CURRENT_LOCATION,
  TOGGLE_LOCATION_LOADING,
  UPDATE_LOCATION_IMAGE,
  LOAD_DEFAULT_LOCATION_TO_CURRENT,
  TOGGLE_MAP_LOADING,
  UPDATE_CURRENT_LOCATION_IP
} from '../actions/types';

const initialState = {
  isLoading: false,
  isLocated: false,
  isLocatedWithIp: false,
  isMapLoading: false,
  location: {
    lat: null,
    lng: null,
    country: null,
    state: 'CA',
    county: null,
    city: 'San Francisco',
    district: null,
    postalCode: '94121',
    locationImage: null
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_DEFAULT_LOCATION_TO_CURRENT:
      return {
        ...state,
        isLocated: true,
        location: action.payload
      };
    case TOGGLE_LOCATION_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case TOGGLE_MAP_LOADING:
      return {
        ...state,
        isMapLoading: action.payload
      };
    case UPDATE_CURRENT_LOCATION:
      return {
        ...state,
        isLocated: true,
        isLocatedWithIp: false,
        location: {
          ...state.location,
          ...action.payload
        }
      };
    case UPDATE_CURRENT_LOCATION_IP:
      return {
        ...state,
        isLocated: false,
        isLocatedWithIp: true,
        location: {
          ...state.location,
          ...action.payload
        }
      };
    case UPDATE_LOCATION_IMAGE:
      return {
        ...state,
        isMapLoading: false,
        location: {
          ...state.location,
          locationImage: action.payload
        }
      };
    default:
      return {
        ...state
      };
  }
}
