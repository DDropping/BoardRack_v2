import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

import { Container, Header, Username, TimeAgo, Description } from "./style";
import timeOrDateAgo from "../../../../utils/timeOrDateAgo";

const MessageOverview = ({ messageDetails, userId }) => {
  const router = useRouter();

  const timeAgo = timeOrDateAgo(messageDetails.lastUpdated, true);
  const from = messageDetails.users.filter(
    (userDetails) => userDetails._id !== userId
  )[0];

  return (
    <Link
      href={`/account?view=messages&thread=${messageDetails._id}`}
      shallow={true}
    >
      <Container active={router.query.thread === messageDetails._id}>
        <Avatar
          icon={<UserOutlined />}
          size={40}
          style={{ marginRight: "5px" }}
        />
        <div style={{ flex: 1 }}>
          <Header>
            <Username>{from.username}</Username>
            <div style={{ flex: 1 }} />
            <TimeAgo>{timeAgo}</TimeAgo>
          </Header>
          <Description>
            {"$" + messageDetails.post.price + " " + messageDetails.post.title}
          </Description>
        </div>
      </Container>
    </Link>
  );
};

export default MessageOverview;
