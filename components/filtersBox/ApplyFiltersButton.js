import React from "react";
import { Button } from "antd";

const ApplyFiltersButton = ({ fetchPosts }) => {
  return (
    <Button
      block
      type='primary'
      style={{ marginBottom: "10px" }}
      onClick={fetchPosts}
    >
      Apply Filters
    </Button>
  );
};

export default ApplyFiltersButton;
