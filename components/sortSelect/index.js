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

  const handleSortChange = (value) => {
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  return (
    <Select
      defaultValue={sortType}
      style={{ width: 175 }}
      bordered={false}
      onChange={handleSortChange}
    >
      <Option value='Newest'>
        <ClockCircleOutlined /> Newest first
      </Option>
      <Option value='Oldest'>
        <ClockCircleFilled /> Oldest first
      </Option>
      <Option value='PriceLowest'>
        <DollarCircleOutlined /> Price: lowest
      </Option>
      <Option value='PriceHighest'>
        <DollarCircleFilled /> Price: highest
      </Option>
    </Select>
  );
};

export default Index;
