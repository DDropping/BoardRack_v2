import React from "react";
import styled from "styled-components";

import timeOrDateAgo from "../../../../utils/timeOrDateAgo";

const Container = styled.div`
  display: flex;
`;

const Justify = styled.div`
  ${(props) => props.recieved && { flex: "1", minWidth: "20%" }};
`;

const MessageContainer = styled.div`
  padding: 10px;
  ${(props) => !props.recieved && { maxWidth: "80%" }};
`;

const Body = styled.div`
  padding: 5px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.recieved
      ? props.theme.backgroundBlueMenu
      : props.theme.backgroundGreyMenu};
`;

const TimeStamp = styled.div`
  display: flex;
  font-style: italic;
  padding: 0 20px;
  color: ${({ theme }) => theme.primaryGrey};
`;

const Message = ({ message, recieved }) => {
  console.log(message);
  return (
    <Container>
      <Justify recieved={recieved} />
      <MessageContainer>
        <Body recieved={recieved}>{message.body}</Body>
        <TimeStamp>
          {recieved && <div style={{ flex: 1 }} />}
          {recieved ? "Recieved " : "Sent "}
          {timeOrDateAgo(message.timeSent)}
        </TimeStamp>
      </MessageContainer>
    </Container>
  );
};

export default Message;
