import React from "react";
import { Button } from "antd";

const ApplyFiltersButton = ({ fetchPosts }) => {
  return (
    <Button
      block
      type='primary'
      style={{
        margin: "0 auto 10px auto",
        display: "block",
        maxWidth: "280px",
      }}
      onClick={fetchPosts}
    >
      Apply Filters
    </Button>
  );
};

export default ApplyFiltersButton;
