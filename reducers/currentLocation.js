import {
  UPDATE_CURRENT_LOCATION,
  TOGGLE_LOCATION_LOADING,
  UPDATE_LOCATION_IMAGE,
  LOAD_DEFAULT_LOCATION_TO_CURRENT
} from '../actions/types';

const initialState = {
  isLoading: false,
  isLocated: false,
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
    case UPDATE_CURRENT_LOCATION:
      return {
        ...state,
        isLocated: true,
        location: {
          ...state.location,
          lat: action.payload.lat,
          lng: action.payload.lng,
          label: action.payload.Label,
          country: action.payload.Country,
          state: action.payload.State,
          county: action.payload.County,
          city: action.payload.City,
          district: action.payload.District,
          postalCode: action.payload.PostalCode
        }
      };
    case UPDATE_LOCATION_IMAGE:
      return {
        ...state,
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
