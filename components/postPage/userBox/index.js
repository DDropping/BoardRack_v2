import React, { useState } from "react";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

import {
  UserBoxContainer,
  AvatarWrapper,
  UserLocationContainer,
  ContactContainer,
} from "./style";

const index = ({ user, location }) => {
  const [isContact, setIsContact] = useState(false);

  return (
    <UserBoxContainer>
      <AvatarWrapper>
        <Avatar size={64} icon={<UserOutlined />} />
      </AvatarWrapper>
      <UserLocationContainer>
        <div style={{ fontSize: "25px" }}>{user.username}</div>
        <div>{location.city + ", " + location.state}</div>
      </UserLocationContainer>
    </UserBoxContainer>
  );
};

export default index;
