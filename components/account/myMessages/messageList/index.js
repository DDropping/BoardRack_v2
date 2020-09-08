import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/router";

import MessageOverview from "./MessageOverview";
import MessageThread from "../messageThread";

const Container = styled.div`
  flex: 1;
  max-width: 300px;
  @media (max-width: ${({ theme }) => theme.sm}) {
    max-width: 100%;
    border-right: none;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
`;

const Li = styled.li``;

const index = () => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <Container>
      <Ul>
        {isAuthenticated &&
          user &&
          user.messages.map((message, index) => {
            return (
              <Li key={index}>
                <MessageOverview messageDetails={message} userId={user._id} />
                {router.query.thread === message._id && (
                  <MessageThread isMessageListChild={true} />
                )}
              </Li>
            );
          })}
      </Ul>
    </Container>
  );
};

export default index;
