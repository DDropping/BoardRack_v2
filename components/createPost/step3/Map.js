import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { SyncOutlined } from "@ant-design/icons";
import Image from "next/image";

const MapWrapper = styled.div`
  position: relative;
  max-width: 100%;
  padding: 0 1rem 0 0.5rem;
  img {
    width: 100%;
  }
`;

const LoadingIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.secondaryBlue};
  margin: auto;
  position: absolute;
  top: 0;
  right: 2rem;
`;

const Map = () => {
  const currentLocation = useSelector((state) => state.currentLocation);
  return (
    <MapWrapper>
      {(!currentLocation.isLocated ||
        (currentLocation.isLocated &&
          !currentLocation.location.locationImage &&
          !currentLocation.isMapLoading)) && (
        <Image
          src='/images/br_default_map.png'
          alt='location map'
          layout='responsive'
          width={500}
          height={250}
        />
      )}

      {currentLocation.isLocated && currentLocation.isMapLoading && (
        <img
          src={
            currentLocation.location.locationImage
              ? currentLocation.location.locationImage
              : "/images/br_default_map.png"
          }
          alt='location map'
          style={{ filter: "grayscale(100%)" }}
        />
      )}

      {currentLocation.isLocated && !currentLocation.isMapLoading && (
        <img src={currentLocation.location.locationImage} alt='location map' />
      )}
      <LoadingIcon>
        {currentLocation.isMapLoading && <SyncOutlined spin />}
      </LoadingIcon>
    </MapWrapper>
  );
};

export default Map;
