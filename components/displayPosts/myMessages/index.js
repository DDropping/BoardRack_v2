import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { Container } from "./style";
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
      setMessages(res.data);
      setLoading(false);
    }
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  return (
    <Container>
      {!isLoading &&
        messages.length > 0 &&
        messages.map((messageThread, index) => {
          return <MessageCard messageThread={messageThread} key={index} />;
        })}
    </Container>
  );
};

export default index;
