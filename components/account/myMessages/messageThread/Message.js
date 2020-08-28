import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import timeOrDateAgo from "../../../../utils/timeOrDateAgo";

const Container = styled.div`
  display: flex;
`;

const Justify = styled.div`
  ${({ recieved }) => recieved && { flex: "1", minWidth: "20%" }};
`;

const MessageContainer = styled.div`
  padding: 10px;
  ${({ recieved }) => !recieved && { maxWidth: "80%" }};
`;

const AvatarContainer = styled.div`
  margin: ${({ recieved }) => (recieved ? "10px 10px 0 0" : "10px 0 0 10px")};
`;

const Body = styled.div`
  display: inline-block;
  padding: 5px;
  border-radius: 10px;
  background-color: ${({ recieved, theme }) =>
    recieved ? theme.backgroundBlueMenu : theme.backgroundGreyMenu};
`;

const TimeStamp = styled.div`
  display: flex;
  font-style: italic;
  padding: 0 20px;
  color: ${({ theme }) => theme.primaryGrey};
`;

const Message = ({ message, recieved }) => {
  return (
    <Container>
      <Justify recieved={recieved} />
      {!recieved && (
        <AvatarContainer recieved={recieved}>
          <Avatar icon={<UserOutlined />} size={40} />
        </AvatarContainer>
      )}
      <MessageContainer>
        <Body recieved={recieved}>{message.body}</Body>
        <TimeStamp>
          {recieved && <div style={{ flex: 1 }} />}
          {recieved ? "Recieved " : "Sent "}
          {timeOrDateAgo(message.timeSent)}
        </TimeStamp>
      </MessageContainer>
      {recieved && (
        <AvatarContainer recieved={recieved}>
          <Avatar icon={<UserOutlined />} size={40} />
        </AvatarContainer>
      )}
    </Container>
  );
};

export default Message;
