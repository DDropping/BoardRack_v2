import React from "react";
import { Button } from "antd";

const MoreFiltersButton = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Less Filters" : "More Filters"}
      </Button>
    </div>
  );
};

export default MoreFiltersButton;
