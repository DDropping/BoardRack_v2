import React from "react";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

import { Container, Banner, AvatarWrapper } from "./style";
import Avatar from "../../avatar";

const index = () => {
  const { username, _id } = useSelector((state) => state.auth.user);
  const router = useRouter();
  return (
    <Container isMessageThreadView={router.query.thread}>
      <Banner />
      <AvatarWrapper>
        <Avatar
          userId={_id}
          username={username}
          size={150}
          isEditable={true}
          isOutlined={true}
        />
      </AvatarWrapper>
    </Container>
  );
};

export default index;
