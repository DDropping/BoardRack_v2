import React from "react";
import styled from "styled-components";

import Message from "./Message";
import MessageBox from "./MessageBox";

const Container = styled.div`
  flex: 1;
  border-right: 1px solid ${({ theme }) => theme.primaryGrey};
`;

const index = ({ messageData }) => {
  return (
    <Container>
      {messageData &&
        messageData.messages.map((message, index) => {
          return (
            <Message
              key={index}
              message={message}
              recieved={messageData.from._id === message.from}
            />
          );
        })}
      <MessageBox messageData={messageData} />
    </Container>
  );
};

export default index;
