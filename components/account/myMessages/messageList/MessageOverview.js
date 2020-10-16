import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Container, Header, Username, TimeAgo, Description } from "./style";
import timeOrDateAgo from "../../../../utils/timeOrDateAgo";
import Avatar from "../../../avatar";

const MessageOverview = ({ messageDetails, userId }) => {
  const router = useRouter();

  const timeAgo = timeOrDateAgo(messageDetails.lastUpdated, true);
  const from = messageDetails.users.filter(
    (userDetails) => userDetails._id !== userId
  )[0];

  return (
    <Link
      href={
        router.query.thread === messageDetails._id
          ? "/account?view=messages"
          : `/account?view=messages&thread=${messageDetails._id}`
      }
      shallow={true}
    >
      <Container active={router.query.thread === messageDetails._id}>
        <Avatar
          size={42}
          profileImage={from.profileImage}
          userId={from._id}
          username={from.username}
        />
        <div style={{ flex: 1, marginLeft: "10px" }}>
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
