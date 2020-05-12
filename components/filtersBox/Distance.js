import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputNumber, Icon } from "antd";

import { UPDATE_DISTANCE } from "../../actions/types";

const Distance = () => {
  const dispatch = useDispatch();
  const postalCode = useSelector(
    (state) => state.currentLocation.location.postalCode
  );

  return (
    <div>
      <strong>Distance: </strong>
      <div
        style={{ borderBottom: "1px solid #E9E9E9", marginBottom: "3px" }}
      ></div>
      <InputNumber
        size="small"
        defaultValue={25}
        onChange={(value) =>
          dispatch({ type: UPDATE_DISTANCE, payload: value })
        }
      />{" "}
      {"miles from "}
      <strong>{postalCode}</strong>
    </div>
  );
};

export default Distance;
