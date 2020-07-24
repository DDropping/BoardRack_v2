import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { Container, Banner, AvatarWrapper } from "./style";

const index = () => {
  return (
    <Container>
      <Banner />
      <AvatarWrapper>
        <Avatar
          size={150}
          icon={<UserOutlined />}
          style={{ border: "5px solid white" }}
        />
      </AvatarWrapper>
    </Container>
  );
};

export default index;
