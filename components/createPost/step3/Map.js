import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const MapWrapper = styled.div`
  position: relative;
  max-width: 100%;
  padding: 0 1rem 0 0.5rem;
`;

const Map = () => {
  const currentLocation = useSelector(state => state.currentLocation);
  return (
    <MapWrapper>
      <img
        src={currentLocation.location.locationImage}
        alt="location map"
        style={{ width: '100%' }}
      />
    </MapWrapper>
  );
};

export default Map;
