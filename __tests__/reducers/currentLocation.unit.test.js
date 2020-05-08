import currentLocation from '@reducers/currentLocation';
import {
  UPDATE_CURRENT_LOCATION,
  TOGGLE_LOCATION_LOADING,
  UPDATE_LOCATION_IMAGE,
  LOAD_DEFAULT_LOCATION_TO_CURRENT,
  TOGGLE_MAP_LOADING,
  UPDATE_CURRENT_LOCATION_IP
} from '@actions/types';

it('handles action of type UPDATE_CURRENT_LOCATION', () => {
  const action = {
    type: UPDATE_CURRENT_LOCATION,
    payload: { city: 'test_city', state: 'test_state' }
  };

  const newState = currentLocation({}, action);

  expect(newState).toEqual({
    isLocated: true,
    isLocatedWithIp: false,
    location: {
      city: 'test_city',
      state: 'test_state'
    }
  });
});

it('handles action of type TOGGLE_LOCATION_LOADING', () => {
  const action = {
    type: TOGGLE_LOCATION_LOADING,
    payload: true
  };

  const newState = currentLocation({}, action);

  expect(newState).toEqual({
    isLoading: true
  });
});

it('handles action of type UPDATE_LOCATION_IMAGE', () => {
  const action = {
    type: UPDATE_LOCATION_IMAGE,
    payload: 'test_locationImage_url'
  };

  const newState = currentLocation({}, action);

  expect(newState).toEqual({
    isMapLoading: false,
    location: {
      locationImage: 'test_locationImage_url'
    }
  });
});

it('handles action of type LOAD_DEFAULT_LOCATION_TO_CURRENT', () => {
  const action = {
    type: LOAD_DEFAULT_LOCATION_TO_CURRENT,
    payload: {
      city: 'test_city',
      state: 'test_state'
    }
  };

  const newState = currentLocation({}, action);

  expect(newState).toEqual({
    isLocated: true,
    location: {
      city: 'test_city',
      state: 'test_state'
    }
  });
});

it('handles action of type TOGGLE_MAP_LOADING', () => {
  const action = {
    type: TOGGLE_MAP_LOADING,
    payload: true
  };

  const newState = currentLocation({}, action);

  expect(newState).toEqual({
    isMapLoading: true
  });
});

it('handles action of type UPDATE_CURRENT_LOCATION_IP', () => {
  const action = {
    type: UPDATE_CURRENT_LOCATION_IP,
    payload: {
      city: 'test_city',
      state: 'test_state'
    }
  };

  const newState = currentLocation({}, action);

  expect(newState).toEqual({
    isLocated: false,
    isLocatedWithIp: true,
    location: {
      city: 'test_city',
      state: 'test_state'
    }
  });
});
