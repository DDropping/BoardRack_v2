import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AppstoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

import { UPDATE_USER_MESSAGES } from "../../../../actions/types";
import { Container, ButtonContainer, MessagesContainer } from "./style";
import baseUrl from "../../../../utils/baseUrl";
import MessageCard from "../../../messageCard";
import timeAgo from "../../../../utils/timeAgo";

const index = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // let loadingCards = [];
  // for (let i = 0; i < 20; ++i) {
  //   loadingCards.push(<LoadingScreenCard key={i} />);
  // }

  useEffect(() => {
    async function checkIfMessagesAreUpToDate() {
      const url = `${baseUrl}/api/messages/mymessages`;
      const res = await axios.get(url);

      // update user messages in store if any changes were made to messages
      if (JSON.stringify(res.data) !== JSON.stringify(user.messages)) {
        dispatch({ type: UPDATE_USER_MESSAGES, payload: res.data });
      }
    }
    if (isAuthenticated) {
      checkIfMessagesAreUpToDate();
    }
  }, [isAuthenticated, user]);

  return (
    <Container>
      <MessagesContainer>
        {isAuthenticated &&
          user.messages.length > 0 &&
          user.messages.map((messageDetails, index) => {
            return <MessageCard messageDetails={messageDetails} key={index} />;
          })}
      </MessagesContainer>
    </Container>
  );
};

export default index;
