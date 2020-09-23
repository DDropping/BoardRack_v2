import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Col, Row } from "antd";

import { UPDATE_CONDITION } from "../../actions/types";

const CheckboxGroup = Checkbox.Group;

const conditionOptions = [
  "New",
  "Heavily Used",
  "Lightly Used",
  "Thrashed",
  "Used",
];

const Condition = () => {
  const dispatch = useDispatch();
  const conditionsList = useSelector((state) => state.filters.condition);

  const onChange = (checkedConditions) => {
    dispatch({ type: UPDATE_CONDITION, payload: checkedConditions });
  };

  const onCheckAllChange = () => {
    dispatch({ type: UPDATE_CONDITION, payload: [] });
  };

  return (
    <div>
      <strong>Condition:</strong>
      <div style={{ borderBottom: "1px solid #E9E9E9" }}>
        <Checkbox
          onChange={onCheckAllChange}
          checked={
            conditionsList.length === 5 || conditionsList.length === 0
              ? true
              : false
          }
        >
          All Conditions
        </Checkbox>
      </div>
      <div>
        <CheckboxGroup value={conditionsList} onChange={onChange}>
          <Row>
            {conditionOptions.map((option) => (
              <Col span={12} key={option}>
                <Checkbox value={option}>{option}</Checkbox>
              </Col>
            ))}
          </Row>
        </CheckboxGroup>
      </div>
    </div>
  );
};

export default Condition;
