import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
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

const MessageBox = ({ messageData, userId }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("messagebox: ", messageData);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.length > 0) {
      sendNewMessage("post", messageData.post._id, from._id, message);
    }
  };

  return (
    <Container>
      <TextArea
        rows={4}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={
          router.query.thread &&
          `Send ${
            messageData.users.filter(
              (userDetails) => userDetails._id !== userId
            )[0].username
          } a message...`
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
