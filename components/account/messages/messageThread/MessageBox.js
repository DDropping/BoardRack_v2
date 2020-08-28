import React, { useState } from "react";
import { Button, Input } from "antd";
import styled from "styled-components";

import sendNewMessage from "../../../../utils/sendNewMessage";

const { TextArea } = Input;

const Container = styled.div`
  margin: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;

const MessageBox = ({ messageData }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.length > 0) {
      sendNewMessage(
        "post",
        messageData.post._id,
        messageData.from._id,
        message
      );
    }
  };

  return (
    <Container>
      <TextArea
        rows={4}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={
          messageData && `Send ${messageData.from.username} a message...`
        }
      />
      <ButtonContainer>
        <div style={{ flex: 1 }} />
        <Button
          type="primary"
          onClick={messageData && sendMessage}
          disabled={message.length < 1 || !messageData}
        >
          Send
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default MessageBox;
