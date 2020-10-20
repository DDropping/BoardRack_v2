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
        <CustomAvatar
          profileImage={user.profileImage ? user.profileImage : null}
          userId={user._id ? user._id : null}
          username={user.username ? user.username : null}
          size={150}
          isEditable={true}
          isOutlined={true}
        />
      </AvatarWrapper>
    </Container>
  );
};

export default index;
