import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { ExclamationCircleTwoTone } from "@ant-design/icons";

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
import Avatar from "../avatar";

const Index = ({ messageDetails }) => {
  console.log("messageDetails: ", messageDetails);
  const user = useSelector((state) => state.auth.user);
  const from = messageDetails.users.filter(
    (userDetails) => userDetails._id !== user._id
  )[0];
  const timeStamp = timeAgo(
    messageDetails.messages[messageDetails.messages.length - 1].timeSent
  );

  return (
    <Container>
      <Link href="#">
        <HeaderContainer>
          <Avatar
            size={28}
            profileImage={from.profileImage}
            userId={from._id}
            username={from.username}
          />
          <div style={{ marginLeft: "5px" }}>{from.username}</div>
        </HeaderContainer>
      </Link>
      <Link
        href={`/account?view=messages&thread=${messageDetails._id}`}
        shallow={true}
      >
        <ContentContainer>
          <TitleWrapper>
            {messageDetails.post &&
              "RE: $" +
                messageDetails.post.price +
                " " +
                messageDetails.post.title}
            {!messageDetails.post && (
              <div>
                <ExclamationCircleTwoTone twoToneColor="#ffa501" />
                {" This Post No Longer Exists"}
              </div>
            )}
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
          <a>Reply</a>
        </Link>
      </FooterContainer>
    </Container>
  );
};

export default Index;
