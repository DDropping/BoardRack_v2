import React from "react";
import { FilterOutlined } from "@ant-design/icons";
import { Button } from "antd";

const ToggleFiltersButton = () => {
  return (
    <div>
      <Button type="link">
        <FilterOutlined /> Hide Filters
      </Button>
    </div>
  );
};

export default ToggleFiltersButton;
