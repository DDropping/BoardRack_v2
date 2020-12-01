import React from "react";
import { Button } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

const MoreFiltersButton = ({ isOpen, setIsOpen }) => {
  return (
    <Button
      block
      style={{
        margin: "0 auto 10px auto",
        display: "block",
        maxWidth: "280px",
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <>
          Less Filters <UpOutlined style={{ fontSize: "10px" }} />
        </>
      ) : (
        <>
          More Filters <DownOutlined style={{ fontSize: "10px" }} />
        </>
      )}
    </Button>
  );
};

export default MoreFiltersButton;
