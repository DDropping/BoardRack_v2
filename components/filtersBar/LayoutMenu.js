import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Dropdown, Menu } from "antd";
import {
  DownOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import { CHANGE_LAYOUT } from "../../actions/types";

const LayoutMenu = () => {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.filters.layout);

  const handleLayoutChange = (key) => {
    dispatch({ type: CHANGE_LAYOUT, payload: key });
  };

  const menu = (
    <Menu>
      <Menu.Item key="Gallery" onClick={(e) => handleLayoutChange(e.key)}>
        <AppstoreOutlined /> Gallery
      </Menu.Item>
      <Menu.Item key="Thumbnail" onClick={(e) => handleLayoutChange(e.key)}>
        <UnorderedListOutlined /> Thumbnail
      </Menu.Item>
      <Menu.Item key="List" onClick={(e) => handleLayoutChange(e.key)}>
        <MenuOutlined /> List
      </Menu.Item>
    </Menu>
  );

  return (
    <Button type="link">
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          {layout === "Gallery" && <AppstoreOutlined />}
          {layout === "Thumbnail" && <UnorderedListOutlined />}
          {layout === "List" && <MenuOutlined />} {layout} <DownOutlined />
        </a>
      </Dropdown>
    </Button>
  );
};

export default LayoutMenu;
