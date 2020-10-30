import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";

import { handleLocationForm } from "../../../actions/location";

const { Search } = Input;

const GetLocationForm = () => {
  const dispatch = useDispatch();
  const isLocated = useSelector((state) => state.currentLocation.isLocated);
  const location = useSelector((state) => state.currentLocation.location);
  const isLocatedWithIp = useSelector(
    (state) => state.currentLocation.isLocatedWithIp
  );
  const isLoading = useSelector((state) => state.currentLocation.isLoading);
  const isMapLoading = useSelector(
    (state) => state.currentLocation.isMapLoading
  );

  const handleGetLocation = (value) => {
    dispatch(handleLocationForm(value));
  };

  return (
    <div>
      <Search
        placeholder={
          isLocated && !isLocatedWithIp
            ? location.city + ", " + location.state + " " + location.postalCode
            : "Address, City, State..."
        }
        enterButton="Locate"
        loading={isMapLoading || isLoading}
        size="large"
        onSearch={(value) => handleGetLocation(value)}
      />
    </div>
  );
};

export default GetLocationForm;
