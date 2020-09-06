import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { UPDATE_USER_MESSAGES } from "../../../actions/types";
import { Container } from "./style";
import baseUrl from "../../../utils/baseUrl";
import MessageList from "./messageList";
import MessageThread from "./messageThread";
import { useRouter } from "next/router";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    async function checkIfMessagesAreUpToDate() {
      const url = `${baseUrl}/api/messages/mymessages`;
      const res = await axios.get(url);

      // update user messages in store if any changes were made to messages
      if (JSON.stringify(res.data) !== JSON.stringify(user.messages)) {
        dispatch({ type: UPDATE_USER_MESSAGES, payload: res.data });
      }
    }
    // if user has messages, display the most recent message thread
    if (isAuthenticated && user.messages.length > 0 && !router.query.thread) {
      router.push(`/account?view=messages&thread=${user.messages[0]._id}`);
    }
    if (isAuthenticated) {
      checkIfMessagesAreUpToDate();
    }
  }, [isAuthenticated]);

  return (
    <Container>
      <MessageList />
      <MessageThread />
    </Container>
  );
};

export default index;
