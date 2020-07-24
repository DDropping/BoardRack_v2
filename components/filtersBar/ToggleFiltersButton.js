import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FilterOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { TOGGLE_FILTERS } from "../../actions/types";

const ToggleFiltersButton = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.filters.isFiltersVisible);
  const handleToggleFilters = () => {
    dispatch({ type: TOGGLE_FILTERS });
  };
  return (
    <div>
      <Button type="link" onClick={handleToggleFilters}>
        <FilterOutlined /> {isVisible ? "Hide Filters" : "Show Filters"}
      </Button>
    </div>
  );
};

export default ToggleFiltersButton;
