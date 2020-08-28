import React from "react";
import Link from "next/link";
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

const NoFavoritesFoundMessage = () => {
  return (
    <Container>
      <Text>Seems you haven't found any boards you like yet.</Text>
      <Text>
        That's okay, click the button below to check out boards near you!
      </Text>
      <Link href={"/"}>
        <Button type="primary" size="large">
          View Boards
        </Button>
      </Link>
    </Container>
  );
};

export default NoFavoritesFoundMessage;
