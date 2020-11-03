import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, InputNumber } from "antd";

import { PriceRangeContainer } from "./style";
import {
  UPDATE_PRICE_MAX,
  UPDATE_PRICE_MIN,
  UPDATE_ANY_PRICE,
} from "../../actions/types";

const PriceRange = () => {
  const dispatch = useDispatch();
  const anyPrice = useSelector((state) => state.filters.price.any);

  return (
    <PriceRangeContainer>
      <strong>Price:</strong>
      <div style={{ borderBottom: "1px solid #E9E9E9", marginBottom: "3px" }}>
        <Checkbox
          onChange={() =>
            dispatch({ type: UPDATE_ANY_PRICE, payload: !anyPrice })
          }
          checked={anyPrice}
        >
          Any Price
        </Checkbox>
      </div>
      <div
        onClick={() => {
          dispatch({ type: UPDATE_ANY_PRICE, payload: false });
        }}
        style={{ display: "inline-block", marginRight: "10px" }}
      >
        <InputNumber
          size="small"
          disabled={anyPrice}
          style={{ cursor: "pointer" }}
          formatter={(value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          onChange={(value) =>
            dispatch({ type: UPDATE_PRICE_MIN, payload: value })
          }
        />
      </div>
      -
      <div
        onClick={() => dispatch({ type: UPDATE_ANY_PRICE, payload: false })}
        style={{ display: "inline-block", marginLeft: "10px" }}
      >
        <InputNumber
          size="small"
          disabled={anyPrice}
          formatter={(value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          onChange={(value) => {
            dispatch({ type: UPDATE_PRICE_MAX, payload: value });
          }}
        />
      </div>
    </PriceRangeContainer>
  );
};

export default PriceRange;
