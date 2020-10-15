import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { Container, Banner, AvatarWrapper } from "./style";
import CustomAvatar from "../../avatar";

const index = () => {
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();
  return (
    <Container isMessageThreadView={router.query.thread}>
      <Banner />
      <AvatarWrapper>
        {user ? (
          <CustomAvatar
            profileImage={user.profileImage}
            userId={user._id}
            username={user.username}
            size={150}
            isEditable={true}
            isOutlined={true}
          />
        ) : (
          <Avatar
            size={150}
            icon={<UserOutlined />}
            style={{ border: "5px solid white" }}
          />
        )}
      </AvatarWrapper>
    </Container>
  );
};

export default index;
