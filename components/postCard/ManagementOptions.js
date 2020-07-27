import React from "react";
import { Button } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";

import { ManagementContainer, ButtonContainer } from "./style";

const ManagementOptions = () => {
  return (
    <ManagementContainer>
      <Button danger>
        <DeleteOutlined />
        Delete
      </Button>
      <div style={{ flex: 1 }} />
      <Button style={{ marginRight: "5px" }}>
        <EditOutlined />
        Edit
      </Button>
      <Button>
        <EyeInvisibleOutlined />
        Hide
      </Button>
    </ManagementContainer>
  );
};

export default ManagementOptions;
