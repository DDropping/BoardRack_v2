import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Card } from "antd";
import { UserOutlined, FormOutlined } from "@ant-design/icons";

import { Container, A, Title, Body, TimeStamp } from "./style";
import timeAgo from "../../utils/timeAgo";

const Index = ({ messageThread }) => {
  const user1 = useSelector((state) => state.auth.user);
  const user2 = messageThread.users.filter(
    (userDetails) => userDetails._id !== user1._id
  )[0];
  console.log(messageThread);
  let time = timeAgo(messageThread.messages[0].timeSent);

  return (
    <Container>
      <Card
        size="small"
        title={
          <A href="#">
            <Avatar icon={<UserOutlined />} /> {user2.username}
          </A>
        }
        extra={
          <a href="#">
            <FormOutlined />
            Reply
          </a>
        }
        style={{ width: 400 }}
      >
        <Title>
          {"RE: $" + messageThread.post.price + " " + messageThread.post.title}
        </Title>
        <Body>{messageThread.messages[0].body}</Body>
        <TimeStamp>
          {messageThread.messages[0].from === user1._id ? "Sent " : "Recieved "}
          {time + " ago"}
        </TimeStamp>
      </Card>
    </Container>
  );
};

export default Index;
