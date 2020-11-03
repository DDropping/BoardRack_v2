import React from "react";
import { UserOutlined } from "@ant-design/icons";

import { Container } from "./style";

const DefaultAvatar = ({ isOutlined, size }) => {
  return (
    <Container
      primary="#ffffff"
      secondary="#d2d2d2"
      isOutlined={isOutlined}
      size={size}
    >
      <UserOutlined />
    </Container>
  );
};

export default DefaultAvatar;
