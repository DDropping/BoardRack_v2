import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { AppstoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

import { Container, ButtonContainer, MessagesContainer } from "./style";
import baseUrl from "../../../../utils/baseUrl";
import MessageCard from "../../../messageCard";
import timeAgo from "../../../../utils/timeAgo";

const index = () => {
  const user = useSelector((state) => state.auth.user);
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // let loadingCards = [];
  // for (let i = 0; i < 20; ++i) {
  //   loadingCards.push(<LoadingScreenCard key={i} />);
  // }

  useEffect(() => {
    async function fetchData() {
      const url = `${baseUrl}/api/messages/mymessages`;
      const res = await axios.get(url);

      //add from, timeago elements
      var messages = res.data.slice(0, 5).map((e) => {
        e.from = e.users.filter(
          (userDetails) => userDetails._id !== user._id
        )[0];
        e.timeAgo = timeAgo(e.messages[0].timeSent);
        return e;
      });

      setMessages(messages);
      setLoading(false);
    }
    if (user) {
      fetchData();
    }
  }, [user]);

  return (
    <Container>
      {messages.length > 0 && (
        <ButtonContainer>
          <div style={{ flex: 1 }} />
          <Link href="/account?view=messages" shallow={true}>
            <Button style={{ marginRight: "10px" }}>
              <AppstoreOutlined /> View All messages
            </Button>
          </Link>
        </ButtonContainer>
      )}

      <MessagesContainer>
        {!isLoading &&
          messages.length > 0 &&
          messages.map((messageDetails, index) => {
            return <MessageCard messageDetails={messageDetails} key={index} />;
          })}
      </MessagesContainer>
    </Container>
  );
};

export default index;
