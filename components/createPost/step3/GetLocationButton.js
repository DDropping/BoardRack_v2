import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { EnvironmentOutlined, LoadingOutlined } from '@ant-design/icons';

import { TOGGLE_LOCATION_LOADING } from '../../../actions/types';
import { handleGeolocation } from '../../../actions/location';

const GetLocationButton = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.currentLocation.isLoading);
  const [isForm, toggleForm] = useState(false);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      dispatch({ type: TOGGLE_LOCATION_LOADING, payload: true });
      navigator.geolocation.getCurrentPosition(
        retrievedLocation,
        toggleForm(true)
      );
    } else {
      toggleForm(true);
      dispatch({ type: TOGGLE_LOCATION_LOADING, payload: true });
    }
  };

  const retrievedLocation = location => {
    const lat = location.coords.latitude;
    const lng = location.coords.longitude;
    dispatch(handleGeolocation({ lat, lng }));
  };

  return (
    <Button
      type="primary"
      ghost
      block
      loading={isLoading}
      onClick={handleGetLocation}
    >
      {isLoading ? <LoadingOutlined /> : <EnvironmentOutlined />} Get Location
    </Button>
  );
};

export default GetLocationButton;
