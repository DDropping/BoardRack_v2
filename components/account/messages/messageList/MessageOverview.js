import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

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
  font-weight: bold;
`;

const Description = styled.div`
  font-style: italic;
  color: ${({ theme }) => theme.primaryDarkGrey};
`;

const MessageOverview = ({ message }) => {
  const router = useRouter();

  return (
    <Link href={`/account?view=messages&thread=${message._id}`} shallow={true}>
      <Container active={router.query.thread === message._id}>
        <Avatar
          icon={<UserOutlined />}
          size={40}
          style={{ marginRight: "5px" }}
        />
        <div>
          <Header>{message.from.username}</Header>
          <Description>
            {"$" + message.post.price + " " + message.post.title}
          </Description>
        </div>
      </Container>
    </Link>
  );
};

export default MessageOverview;
