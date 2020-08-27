import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

import timeOrDateAgo from "../../../../utils/timeOrDateAgo";

const Container = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.primaryGrey};
  cursor: pointer;
  transition: ${({ theme }) => theme.easeInOut};
  background: ${(props) => props.active && props.theme.backgroundBlueMenu};

  border-right: ${(props) =>
    props.active && "3px solid " + props.theme.primaryBlue};
  &:hover {
    background: ${({ theme }) => theme.backgroundBlueMenu};
    padding-left: 1rem;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
`;

const Username = styled.div`
  font-weight: bold;
`;

const TimeAgo = styled.div`
  font-style: italic;
  color: ${({ theme }) => theme.primaryDarkGrey};
`;

const Description = styled.div`
  font-style: italic;
  color: ${({ theme }) => theme.primaryDarkGrey};
`;

const MessageOverview = ({ messageDetails }) => {
  const router = useRouter();

  const timeAgo = timeOrDateAgo(messageDetails.lastUpdated, true);

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
            <Username>{messageDetails.from.username}</Username>
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
