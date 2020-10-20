import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

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
          profileImage={user ? user.profileImage : null}
          userId={user ? user._id : null}
          username={user ? user.username : null}
          size={150}
          isEditable={true}
          isOutlined={true}
        />
      </AvatarWrapper>
    </Container>
  );
};

export default index;
