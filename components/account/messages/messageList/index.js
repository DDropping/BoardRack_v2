import React from "react";
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

const index = ({ messages }) => {
  return (
    <Container>
      <Ul>
        {messages.map((message, index) => {
          return (
            <Li>
              <MessageOverview key={index} messageDetails={message} />
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
};

export default index;
