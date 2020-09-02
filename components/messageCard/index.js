import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

import {
  Container,
  HeaderContainer,
  ContentContainer,
  TitleWrapper,
  MessageBodyWrapper,
  FooterContainer,
  TimeStampWrapper,
} from "./style";
import timeAgo from "../../utils/timeAgo";

const Index = ({ messageDetails }) => {
  const user = useSelector((state) => state.auth.user);
  const from = messageDetails.users.filter(
    (userDetails) => userDetails._id !== user._id
  )[0];
  const timeStamp = timeAgo(
    messageDetails.messages[messageDetails.messages.length - 1].timeSent
  );

  return (
    <Container>
      <HeaderContainer>
        <Link href="#">
          <a>
            <Avatar icon={<UserOutlined />} /> {from.username}
          </a>
        </Link>
      </HeaderContainer>
      <Link
        href={`/account?view=messages&thread=${messageDetails._id}`}
        shallow={true}
      >
        <ContentContainer>
          <TitleWrapper>
            {"RE: $" +
              messageDetails.post.price +
              " " +
              messageDetails.post.title}
          </TitleWrapper>
          <MessageBodyWrapper>
            {messageDetails.messages[messageDetails.messages.length - 1].body}
          </MessageBodyWrapper>
          <div style={{ flex: 1 }} />
        </ContentContainer>
      </Link>
      <FooterContainer>
        <TimeStampWrapper>
          {messageDetails.messages[messageDetails.messages.length - 1].from ===
          user._id
            ? `Sent ${timeStamp} ago`
            : `Recieved ${timeStamp} ago`}
        </TimeStampWrapper>
        <div style={{ flex: 1 }} />
        <Link
          href={`/account?view=messages&thread=${messageDetails._id}`}
          shallow={true}
        >
          Reply
        </Link>
      </FooterContainer>
    </Container>
  );
};

export default Index;
