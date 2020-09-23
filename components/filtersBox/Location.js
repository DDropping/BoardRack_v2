import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Divider, Input } from "antd";
import { CloseCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";

import { LocationTextWrapper } from "./style";
import { handleLocationForm, handleGeolocation } from "../../actions/location";
import { TOGGLE_LOCATION_LOADING } from "../../actions/types";

const Location = () => {
  const dispatch = useDispatch();
  const [isLocationForm, toggleLocationForm] = useState(false);
  const [locationValue, setLocationValue] = useState("");
  const currentLocation = useSelector((state) => state.currentLocation);

  const isLoading = currentLocation.isLoading;
  const isLocated = currentLocation.isLocated;
  const isLocatedWithIp = currentLocation.isLocatedWithIp;
  const location = currentLocation.location;

  useEffect(() => {
    if (!isLocated && !isLocatedWithIp) {
      toggleLocationForm(true);
    } else {
      toggleLocationForm(false);
    }
  }, [isLocated, isLocatedWithIp]);

  const handleLocationValueChange = (e) => {
    setLocationValue(e.target.value);
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      dispatch({ type: TOGGLE_LOCATION_LOADING, payload: true });
      navigator.geolocation.getCurrentPosition(retrievedLocation);
    } else {
      dispatch({ type: TOGGLE_LOCATION_LOADING, payload: true });
    }
  };

  const retrievedLocation = (location) => {
    const lat = location.coords.latitude;
    const lng = location.coords.longitude;
    dispatch(handleGeolocation({ lat, lng }));
  };

  const handleGetLocationForm = () => {
    console.log(locationValue);
    dispatch(handleLocationForm(locationValue));
  };

  const locationFormHidden = (
    <div>
      <Button
        onClick={() => {
          toggleLocationForm(true);
        }}
        type="primary"
        ghost
        block
      >
        Change Location
      </Button>
    </div>
  );

  const locationFormVisible = (
    <div>
      <CloseCircleOutlined
        onClick={() => {
          toggleLocationForm(false);
        }}
        style={{
          position: "absolute",
          top: "0.25rem",
          right: "0.25rem",
          fontSize: "1rem",
        }}
      />
      <Button
        type="primary"
        ghost
        block
        loading={isLoading}
        style={{ marginBottom: "0.25rem" }}
        onClick={handleGetLocation}
      >
        <EnvironmentOutlined /> Use Current Location
      </Button>

      <Divider style={{ fontSize: "0.75rem", margin: "6px 0" }}>OR</Divider>

      <Input
        name="location"
        value={locationValue}
        style={{ marginBottom: "0.25rem" }}
        placeholder={
          isLocated
            ? location.city + ", " + location.state + " " + location.postalCode
            : "San Fracisco, CA 94122"
        }
        onChange={(e) => handleLocationValueChange(e)}
      />
      <Button
        type="primary"
        ghost
        block
        loading={isLoading}
        style={{ marginBottom: "0.25rem" }}
        onClick={locationValue !== "" && handleGetLocationForm}
      >
        Update Location
      </Button>
    </div>
  );

  return (
    <div>
      <LocationTextWrapper>
        {isLocated || isLocatedWithIp
          ? location.city + ", " + location.state
          : "Could Not Retrieve Location"}
      </LocationTextWrapper>
      {!isLocationForm ? locationFormHidden : locationFormVisible}
    </div>
  );
};

export default Location;
