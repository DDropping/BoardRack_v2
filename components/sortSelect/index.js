import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import {
  ClockCircleOutlined,
  ClockCircleFilled,
  DollarCircleOutlined,
  DollarCircleFilled,
} from "@ant-design/icons";

import { UPDATE_SORT } from "../../actions/types";

const { Option } = Select;

const Index = () => {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.filters.sort);

  const handleSortChange = (key) => {
    dispatch({ type: UPDATE_SORT, payload: key });
  };

  return (
    <Select
      defaultValue={sortType}
      style={{ width: 175 }}
      bordered={false}
      onChange={(event) => handleSortChange(event.key)}
    >
      <Option value='Newest'>
        <ClockCircleOutlined /> Time: New first
      </Option>
      <Option value='Oldest'>
        <ClockCircleFilled /> Time: Oldest first
      </Option>
      <Option value='Lowest'>
        <DollarCircleOutlined /> Price: Low first
      </Option>
      <Option value='Highest'>
        <DollarCircleFilled /> Price: High first
      </Option>
    </Select>
  );
};

export default Index;
