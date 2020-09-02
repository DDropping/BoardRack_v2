import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Button, Input } from "antd";
import styled from "styled-components";

import sendNewMessage from "../../../../utils/sendNewMessage";
import { UPDATE_USER_MESSAGES } from "../../../../actions/types";

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

  const updateMessagesInStore = () => {
    var payload = user.messages;
    payload = payload.map((m) => {
      if (m._id === messageData._id) {
        m.messages.push({
          from: userId,
          body: message,
          timeSent: Date.now(),
        });
      }
      return m;
    });
    dispatch({ type: UPDATE_USER_MESSAGES, payload: payload });
  };

  const sendMessage = () => {
    if (message.length > 0) {
      sendNewMessage("post", messageData.post._id, from._id, message);
      updateMessagesInStore();
      setMessage("");
    }
  };

  const from = messageData.users.filter(
    (userDetails) => userDetails._id !== userId
  )[0];

  user.messages.filter(
    (messageData) => messageData._id === router.query.thread
  )[0];

  return (
    isAuthenticated && (
      <Container>
        <TextArea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={
            router.query.thread && `Send ${from.username} a message...`
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
    )
  );
};

export default MessageBox;
