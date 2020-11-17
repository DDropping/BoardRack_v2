import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, InputNumber } from "antd";

import { InputRangeContainer } from "../style";
import {
  UPDATE_ANY_VOLUME,
  UPDATE_DIMENSIONS_VOLUME_MIN,
  UPDATE_DIMENSIONS_VOLUME_MAX,
} from "../../../actions/types";

const VolumeRange = () => {
  const dispatch = useDispatch();
  const anyVolume = useSelector((state) => state.filters.volume.any);

  return (
    <InputRangeContainer>
      <strong>Vidth:</strong>
      <div style={{ borderBottom: "1px solid #E9E9E9", marginBottom: "3px" }}>
        <Checkbox
          onChange={() =>
            dispatch({ type: UPDATE_ANY_VOLUME, payload: !anyVolume })
          }
          checked={anyVolume}
        >
          Any Volume
        </Checkbox>
      </div>
      <div
        onClick={() => {
          dispatch({ type: UPDATE_ANY_VOLUME, payload: false });
        }}
        style={{ display: "inline-block", marginRight: "10px" }}
      >
        <InputNumber
          size='small'
          disabled={anyVolume}
          style={{ cursor: "pointer" }}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          onChange={(value) => {
            console.log("UPDATEING DIMENSIONS VOLUME MIN");
            dispatch({ type: UPDATE_DIMENSIONS_VOLUME_MIN, payload: value });
          }}
        />{" "}
        in.
      </div>
      -
      <div
        onClick={() => dispatch({ type: UPDATE_ANY_VOLUME, payload: false })}
        style={{ display: "inline-block", marginLeft: "10px" }}
      >
        <InputNumber
          size='small'
          disabled={anyVolume}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          onChange={(value) => {
            dispatch({ type: UPDATE_DIMENSIONS_VOLUME_MAX, payload: value });
          }}
        />{" "}
        in.
      </div>
    </InputRangeContainer>
  );
};

export default VolumeRange;
