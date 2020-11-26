import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { UPDATE_USER_MESSAGES } from "../../../../actions/types";
import { Container } from "./style";
import baseUrl from "../../../../utils/baseUrl";
import MessageCard from "../../../messageCard";
import NoDataFoundMessage from "../../NoDataFoundMessage";
import LoadingMessageCard from "../../../loadingScreens/messageCard";

const index = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  let loadingCards = [];
  for (let i = 0; i < 3; ++i) {
    loadingCards.push(<LoadingMessageCard key={i} />);
  }

  useEffect(() => {
    async function checkIfMessagesAreUpToDate() {
      try {
        const url = `${baseUrl}/api/messages/mymessages`;
        const res = await axios.get(url);

        // update user messages in store if any changes were made to messages
        if (JSON.stringify(res.data) !== JSON.stringify(user.messages)) {
          dispatch({ type: UPDATE_USER_MESSAGES, payload: res.data });
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    if (isAuthenticated) {
      checkIfMessagesAreUpToDate();
    }
  }, [isAuthenticated, user]);

  return (
    <Container>
      {isLoading && loadingCards}

      {isAuthenticated &&
        user.messages.length > 0 &&
        !isLoading &&
        user.messages.map((messageDetails, index) => {
          return <MessageCard messageDetails={messageDetails} key={index} />;
        })}

      {isError && !isLoading && !(user.messages.length > 0) && (
        <NoDataFoundMessage
          title={"Uhh ohh, something went wrong on our end..."}
          subtitle={
            "We couldn't retrieve your messages, give us a moment then try again"
          }
        />
      )}
    </Container>
  );
};

export default index;
