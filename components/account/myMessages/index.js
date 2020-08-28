import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";

import timeAgo from "../../../utils/timeAgo";
import { Container } from "./style";
import baseUrl from "../../../utils/baseUrl";
import MessageList from "./messageList";
import MessageThread from "./messageThread";

const index = () => {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    async function fetchData() {
      const url = `${baseUrl}/api/messages/mymessages`;
      const res = await axios.get(url);

      //add from, timeago elements
      var messages = res.data.map((e) => {
        e.from = e.users.filter(
          (userDetails) => userDetails._id !== user._id
        )[0];
        e.timeAgo = timeAgo(e.messages[0].timeSent);
        return e;
      });

      setMessages(messages);
      setLoading(false);
    }
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  return (
    <Container>
      <MessageList messages={messages} isLoading={isLoading} />
      <MessageThread
        messageData={messages.find((messageDetails) => {
          return messageDetails._id === router.query.thread;
        })}
      />
    </Container>
  );
};

export default index;
