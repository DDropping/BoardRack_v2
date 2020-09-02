import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import MessageOverview from "./MessageOverview";

const Container = styled.div`
  flex: 1;
  max-width: 300px;
  border-right: 1px solid ${({ theme }) => theme.primaryGrey};
`;

const Ul = styled.ul`
  list-style-type: none;
`;

const Li = styled.li``;

const index = () => {
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
              </Li>
            );
          })}
      </Ul>
    </Container>
  );
};

export default index;
