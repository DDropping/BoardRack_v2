import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Row, Col } from "antd";

import { UPDATE_BOARD_TYPE } from "../../actions/types";

const CheckboxGroup = Checkbox.Group;

const boardTypeOptions = [
  "Shortboard",
  "Longboard",
  "Fish",
  "Funboard",
  "Hybrid",
  "Gun",
  "Grovler",
  "SUP",
];

const BoardType = () => {
  const dispatch = useDispatch();
  const boardTypeList = useSelector((state) => state.filters.boardType);

  const onChange = (checkedList) => {
    dispatch({ type: UPDATE_BOARD_TYPE, payload: checkedList });
  };

  const onCheckAllChange = (e) => {
    dispatch({ type: UPDATE_BOARD_TYPE, payload: [] });
  };

  return (
    <div>
      <strong>Board Type:</strong>
      <div style={{ borderBottom: "1px solid #E9E9E9" }}>
        <Checkbox
          onChange={onCheckAllChange}
          checked={
            boardTypeList.length === 8 || boardTypeList.length === 0
              ? true
              : false
          }
        >
          All Boards
        </Checkbox>
      </div>
      <div>
        <CheckboxGroup value={boardTypeList} onChange={onChange}>
          <Row>
            {boardTypeOptions.map((option) => (
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

export default BoardType;
