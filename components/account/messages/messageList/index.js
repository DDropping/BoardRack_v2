import React from "react";
import styled from "styled-components";

import MessageOverview from "./MessageOverview";

const Container = styled.div`
  flex: 1;
  max-width: 300px;
  border-right: 1px solid ${({ theme }) => theme.primaryGrey};
`;

const index = ({ messages }) => {
  return (
    <Container>
      {messages.map((message, index) => {
        return <MessageOverview key={index} message={message} />;
      })}
    </Container>
  );
};

export default index;
