import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import {
  AppstoreOutlined,
  UnorderedListOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import { CHANGE_LAYOUT } from "../../actions/types";

const { Option } = Select;

const LayoutMenu = () => {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.filters.layout);

  const handleLayoutChange = (value) => {
    dispatch({ type: CHANGE_LAYOUT, payload: value });
  };

  return (
    <Select
      defaultValue={layout}
      style={{ width: 150 }}
      bordered={false}
      onChange={handleLayoutChange}
    >
      <Option value='Gallery'>
        <AppstoreOutlined /> Gallery
      </Option>
      <Option value='Thumbnail'>
        <UnorderedListOutlined /> Thumbnail
      </Option>
      <Option value='List'>
        <MenuOutlined /> List View
      </Option>
    </Select>
  );
};

export default LayoutMenu;
