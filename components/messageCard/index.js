import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Card } from "antd";
import { UserOutlined, FormOutlined } from "@ant-design/icons";
import Link from "next/link";

import { Container, A, Title, Body, TimeStamp } from "./style";

const Index = ({ messageDetails }) => {
  const user = useSelector((state) => state.auth.user);
  console.log(messageDetails);

  return (
    <Container>
      <Card
        size="small"
        title={
          <A href="#">
            <Avatar icon={<UserOutlined />} /> {messageDetails.from.username}
          </A>
        }
        extra={
          <Link
            href={`/account?view=messages&thread=${messageDetails._id}`}
            shallow={true}
          >
            <a>
              <FormOutlined />
              Reply
            </a>
          </Link>
        }
        style={{ width: 400 }}
      >
        <Link
          href={`/account?view=messages&thread=${messageDetails._id}`}
          shallow={true}
        >
          <a>
            <Title>
              {"RE: $" +
                messageDetails.post.price +
                " " +
                messageDetails.post.title}
            </Title>
            <Body>
              {messageDetails.messages[messageDetails.messages.length - 1].body}
            </Body>
            <TimeStamp>
              {messageDetails.messages[messageDetails.messages.length - 1]
                .from === user._id
                ? "Sent "
                : "Recieved "}
              {messageDetails.timeAgo + " ago"}
            </TimeStamp>
          </a>
        </Link>
      </Card>
    </Container>
  );
};

export default Index;
