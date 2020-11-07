import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/router";
import axios from "axios";

import baseUrl from "../../../../utils/baseUrl";
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

  //flag message as read
  useEffect(() => {
    if (user) {
      console.log("use effect now");
      let message = user.messages.find(
        (messageData) => messageData._id === router.query.thread
      );
      if (message) {
        console.log(message);
        console.log(
          "from: ",
          message.messages[message.messages.length - 1].from
        );
        console.log("me: ", user._id);
        if (
          message.messages[message.messages.length - 1].from !== user._id &&
          !message.isRead
        ) {
          console.log("send the kraken");
          //change this to !==
          const url = `${baseUrl}/api/messages/flagMessageAsRead/${message._id}`;
          axios.patch(url);
        }
      }
    }
  }, [user]);

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
                <PostListRow
                  postData={
                    user.messages.find(
                      (messageData) => messageData._id === router.query.thread
                    ).post
                  }
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
