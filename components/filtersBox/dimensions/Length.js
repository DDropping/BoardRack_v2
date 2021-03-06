import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, InputNumber } from "antd";

import { InputRangeContainer } from "../style";
import {
  UPDATE_ANY_LENGTH,
  UPDATE_DIMENSIONS_LENGTH_MIN_FT,
  UPDATE_DIMENSIONS_LENGTH_MAX_FT,
  UPDATE_DIMENSIONS_LENGTH_MIN_IN,
  UPDATE_DIMENSIONS_LENGTH_MAX_IN,
} from "../../../actions/types";

const LengthRange = () => {
  const dispatch = useDispatch();
  const anyLength = useSelector((state) => state.filters.length.any);

  return (
    <InputRangeContainer>
      <strong>Length:</strong>
      <div style={{ borderBottom: "1px solid #E9E9E9", marginBottom: "3px" }}>
        <Checkbox
          onChange={() =>
            dispatch({ type: UPDATE_ANY_LENGTH, payload: !anyLength })
          }
          checked={anyLength}
        >
          Any Length
        </Checkbox>
      </div>
      <div
        onClick={() => {
          dispatch({ type: UPDATE_ANY_LENGTH, payload: false });
        }}
        style={{ display: "inline-block", marginRight: "10px" }}
      >
        <InputNumber
          size='small'
          disabled={anyLength}
          style={{ cursor: "pointer" }}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          min={0}
          max={25}
          onChange={(value) =>
            dispatch({ type: UPDATE_DIMENSIONS_LENGTH_MIN_FT, payload: value })
          }
          style={{ width: "50px" }}
        />{" "}
        ft.
        <InputNumber
          size='small'
          disabled={anyLength}
          style={{ cursor: "pointer" }}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          min={0}
          max={12}
          onChange={(value) =>
            dispatch({ type: UPDATE_DIMENSIONS_LENGTH_MIN_IN, payload: value })
          }
          style={{ width: "50px" }}
        />{" "}
        in.
      </div>
      -
      <div
        onClick={() => dispatch({ type: UPDATE_ANY_LENGTH, payload: false })}
        style={{ display: "inline-block", marginLeft: "10px" }}
      >
        <InputNumber
          size='small'
          disabled={anyLength}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          min={0}
          max={25}
          onChange={(value) => {
            dispatch({ type: UPDATE_DIMENSIONS_LENGTH_MAX_FT, payload: value });
          }}
          style={{ width: "50px" }}
        />{" "}
        ft.
        <InputNumber
          size='small'
          disabled={anyLength}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          min={0}
          max={12}
          onChange={(value) => {
            dispatch({ type: UPDATE_DIMENSIONS_LENGTH_MAX_IN, payload: value });
          }}
          style={{ width: "50px" }}
        />{" "}
        in.
      </div>
    </InputRangeContainer>
  );
};

export default LengthRange;
