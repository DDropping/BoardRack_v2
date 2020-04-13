import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const MapWrapper = styled.div`
  max-width: 100%;
  padding: 0 1rem 0 0.5rem;
`;

const Map = () => {
  const mapUrl = useSelector(
    state => state.currentLocation.location.locationImage
  );
  return (
    <MapWrapper>
      <img src={mapUrl} alt="location map" style={{ width: '100%' }} />
    </MapWrapper>
  );
};

export default Map;
