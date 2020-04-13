import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';
import { EnvironmentOutlined, LoadingOutlined } from '@ant-design/icons';

import { TOGGLE_LOCATION_LOADING } from '../../../actions/types';
import { handleLocationForm } from '../../../actions/location';

const { Search } = Input;

const GetLocationForm = () => {
  const dispatch = useDispatch();
  const isLocated = useSelector(state => state.currentLocation.isLocated);
  const isImageLoading = useSelector(
    state => state.currentLocation.isImageLoading
  );
  const location = useSelector(state => state.currentLocation.location);

  const handleGetLocation = value => {
    dispatch(handleLocationForm({ value }));
  };

  return (
    <Search
      placeholder={
        isLocated
          ? location.city + ', ' + location.state + ' ' + location.postalCode
          : 'Address, City, State...'
      }
      enterButton="Locate"
      loading={isImageLoading}
      size="large"
      onSearch={value => handleGetLocation(value)}
    />
  );
};

export default GetLocationForm;
