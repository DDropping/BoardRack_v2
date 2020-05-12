import React from "react";
import { Button } from "antd";

const MoreFiltersButton = ({ isOpen, setIsOpen }) => {
  return (
    <Button
      style={{ margin: "0 auto", display: "block" }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? "Less Filters" : "More Filters"}
    </Button>
  );
};

export default MoreFiltersButton;
