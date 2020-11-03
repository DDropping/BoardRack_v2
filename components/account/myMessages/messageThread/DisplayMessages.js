import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Message from "./Message";

const MessagesContainer = styled.div`
  max-height: 600px;
  overflow-y: auto;
`;

const DisplayMessages = ({ user }) => {
  const autoScrollToCurrentMessage = useRef();
  const router = useRouter();

  useEffect(() => {
    autoScrollToCurrentMessage.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [user.messages]);

  return (
    <MessagesContainer>
      {user.messages
        .find((messageData) => messageData._id === router.query.thread)
        .messages.map((message, index) => {
          return (
            <Message
              key={index}
              message={message}
              recieved={user._id !== message.from}
              users={user}
            />
          );
        })}
      <div ref={autoScrollToCurrentMessage} style={{ height: 0 }} />
    </MessagesContainer>
  );
};

export default DisplayMessages;
