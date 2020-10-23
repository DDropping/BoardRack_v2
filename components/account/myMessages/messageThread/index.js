import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/router";

import PostListRow from "../../../postListRow";
import DisplayMessages from "./DisplayMessages";
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

const index = ({ isMessageListChild }) => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    isAuthenticated &&
    user.messages.length > 0 && (
      <Container isMessageListChild={isMessageListChild}>
        {router.query.thread &&
          user.messages.find(
            (messageData) => messageData._id === router.query.thread
          ).post && (
            <PostListRow
              postData={
                user.messages.find(
                  (messageData) => messageData._id === router.query.thread
                ).post
              }
            />
          )}

        {router.query.thread && <DisplayMessages user={user} />}

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
