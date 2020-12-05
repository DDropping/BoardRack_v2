import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, InputNumber } from "antd";

import { InputRangeContainer } from "../style";
import {
  UPDATE_ANY_WIDTH,
  UPDATE_DIMENSIONS_WIDTH_MIN,
  UPDATE_DIMENSIONS_WIDTH_MAX,
} from "../../../actions/types";

const WidthRange = () => {
  const dispatch = useDispatch();
  const anyWidth = useSelector((state) => state.filters.width.any);

  return (
    <InputRangeContainer>
      <strong>Width:</strong>
      <div style={{ borderBottom: "1px solid #E9E9E9", marginBottom: "3px" }}>
        <Checkbox
          onChange={() =>
            dispatch({ type: UPDATE_ANY_WIDTH, payload: !anyWidth })
          }
          checked={anyWidth}
        >
          Any Width
        </Checkbox>
      </div>
      <div
        onClick={() => {
          dispatch({ type: UPDATE_ANY_WIDTH, payload: false });
        }}
        style={{ display: "inline-block", marginRight: "10px" }}
      >
        <InputNumber
          size='small'
          disabled={anyWidth}
          style={{ cursor: "pointer" }}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          onChange={(value) =>
            dispatch({ type: UPDATE_DIMENSIONS_WIDTH_MIN, payload: value })
          }
        />{" "}
        in.
      </div>
      -
      <div
        onClick={() => dispatch({ type: UPDATE_ANY_WIDTH, payload: false })}
        style={{ display: "inline-block", marginLeft: "10px" }}
      >
        <InputNumber
          size='small'
          disabled={anyWidth}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          onChange={(value) => {
            dispatch({ type: UPDATE_DIMENSIONS_WIDTH_MAX, payload: value });
          }}
        />{" "}
        in.
      </div>
    </InputRangeContainer>
  );
};

export default WidthRange;
