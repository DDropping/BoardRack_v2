import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/router";
import axios from "axios";

import {
  DECREASE_MESSAGE_NOTIFICATION,
  FLAG_MESSAGE_AS_READ,
} from "../../../../actions/types";
import baseUrl from "../../../../utils/baseUrl";
import PostThumbnail from "../../../postThumbnail";
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
  const dispatch = useDispatch();

  //flag message as read
  useEffect(() => {
    if (user) {
      let message = user.messages.find(
        (messageData) => messageData._id === router.query.thread
      );
      if (message) {
        if (
          message.messages[message.messages.length - 1].from !== user._id &&
          !message.isRead
        ) {
          const url = `${baseUrl}/api/messages/flagMessageAsRead/${message._id}`;
          axios.patch(url);
          dispatch({
            type: DECREASE_MESSAGE_NOTIFICATION,
            payload: message._id,
          });
          dispatch({
            type: FLAG_MESSAGE_AS_READ,
            payload: message._id,
          });
        }
      }
    }
  }, [user, router.query.thread]);

  return (
    isAuthenticated &&
    user.messages.length > 0 && (
      <Container isMessageListChild={isMessageListChild}>
        {router.query.thread &&
          user.messages.find(
            (messageData) => messageData._id === router.query.thread
          ) && (
            <>
              {user.messages.find(
                (messageData) => messageData._id === router.query.thread
              ).post && (
                <PostThumbnail
                  postData={
                    user.messages.find(
                      (messageData) => messageData._id === router.query.thread
                    ).post
                  }
                  directToPostPage={true}
                />
              )}
              <DisplayMessages user={user} />

              <MessageBox
                userId={user._id}
                messageData={
                  user.messages.filter(
                    (messageData) => messageData._id === router.query.thread
                  )[0]
                }
              />
            </>
          )}
      </Container>
    )
  );
};

export default index;
