import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const Container = styled.div`
  margin: 10px;
  width: 100%;
  text-align: center;
`;

const Text = styled.div`
  margin: 5px;
  font-size: 1.1rem;
  line-height: 1.1rem;
`;

const NoPostsFoundMessage = () => {
  return (
    <Container>
      <Text>Looks like you haven't created any posts yet.</Text>
      <Text>That's okay, click the button below to create a new post!</Text>
      <Button type="primary" size="large">
        Create Post
      </Button>
    </Container>
  );
};

export default NoPostsFoundMessage;
