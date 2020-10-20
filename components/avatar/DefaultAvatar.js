import React from "react";
import { UserOutlined } from "@ant-design/icons";

import { Container } from "./style";

const DefaultAvatar = ({ isOutlined, size }) => {
  return (
    <Container
      primary="#ffffff"
      secondary="#00458a"
      isOutlined={isOutlined}
      size={size}
    >
      <UserOutlined />
    </Container>
  );
};

export default DefaultAvatar;
