import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { AppstoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

import { Container, ButtonContainer, MessagesContainer } from "./style";
import baseUrl from "../../../utils/baseUrl";
import MessageCard from "../../messageCard";

const index = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
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
      setMessages(res.data.slice(0, 5));
      setLoading(false);
    }
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

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
          messages.map((messageThread, index) => {
            return <MessageCard messageThread={messageThread} key={index} />;
          })}
      </MessagesContainer>
    </Container>
  );
};

export default index;
