import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/router";

import PostListRow from "../../../postListRow";
import Message from "./Message";
import MessageBox from "./MessageBox";

const Container = styled.div`
  flex: 1;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.primaryGrey};
  ${({ isMessageListChild, theme }) =>
    isMessageListChild && {
      display: "none",
      margin: "0 10px 10px 10px",
      borderRight: `1px solid ${theme.primaryGrey}`,
      borderBottom: `1px solid ${theme.primaryGrey}`,
    }}
  @media (max-width: ${({ theme }) => theme.sm}) {
    ${({ isMessageListChild }) =>
      isMessageListChild ? { display: "block" } : { display: "none" }}
  }
`;

const MessagesContainer = styled.div`
  max-height: 600px;
  overflow: auto;
`;

const index = ({ isMessageListChild }) => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    isAuthenticated &&
    user.messages.length > 0 && (
      <Container isMessageListChild={isMessageListChild}>
        {router.query.thread && (
          <PostListRow
            postData={
              user.messages.filter(
                (messageData) => messageData._id === router.query.thread
              )[0].post
            }
          />
        )}

        {router.query.thread && (
          <MessagesContainer>
            {user.messages
              .filter(
                (messageData) => messageData._id === router.query.thread
              )[0]
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
          </MessagesContainer>
        )}

        {router.query.thread && (
          <MessageBox
            userId={user._id}
            messageData={
              user.messages.filter(
                (messageData) => messageData._id === router.query.thread
              )[0]
            }
          />
        )}
      </Container>
    )
  );
};

export default index;
