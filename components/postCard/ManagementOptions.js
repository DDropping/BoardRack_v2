import React from "react";
import { Button } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";

import { ManagementContainer } from "./style";

const ManagementOptions = () => {
  return (
    <ManagementContainer>
      <Button style={{ marginRight: "5px" }}>
        <EditOutlined />
        Edit
      </Button>
      <Button>
        <EyeInvisibleOutlined />
        Hide
      </Button>

      <div style={{ flex: 1 }} />

      <Button danger>
        <DeleteOutlined />
      </Button>
    </ManagementContainer>
  );
};

export default ManagementOptions;
