import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, InputNumber } from "antd";

import { InputRangeContainer } from "../style";
import {
  UPDATE_ANY_DEPTH,
  UPDATE_DIMENSIONS_DEPTH_MIN,
  UPDATE_DIMENSIONS_DEPTH_MAX,
} from "../../../actions/types";

const DepthRange = () => {
  const dispatch = useDispatch();
  const anyDepth = useSelector((state) => state.filters.depth.any);

  return (
    <InputRangeContainer>
      <strong>Depth:</strong>
      <div style={{ borderBottom: "1px solid #E9E9E9", marginBottom: "3px" }}>
        <Checkbox
          onChange={() =>
            dispatch({ type: UPDATE_ANY_DEPTH, payload: !anyDepth })
          }
          checked={anyDepth}
        >
          Any Depth
        </Checkbox>
      </div>
      <div
        onClick={() => {
          dispatch({ type: UPDATE_ANY_DEPTH, payload: false });
        }}
        style={{ display: "inline-block", marginRight: "10px" }}
      >
        <InputNumber
          size='small'
          disabled={anyDepth}
          style={{ cursor: "pointer" }}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          onChange={(value) =>
            dispatch({ type: UPDATE_DIMENSIONS_DEPTH_MIN, payload: value })
          }
        />{" "}
        in.
      </div>
      -
      <div
        onClick={() => dispatch({ type: UPDATE_ANY_DEPTH, payload: false })}
        style={{ display: "inline-block", marginLeft: "10px" }}
      >
        <InputNumber
          size='small'
          disabled={anyDepth}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          onChange={(value) => {
            dispatch({ type: UPDATE_DIMENSIONS_DEPTH_MAX, payload: value });
          }}
        />{" "}
        in.
      </div>
    </InputRangeContainer>
  );
};

export default DepthRange;
