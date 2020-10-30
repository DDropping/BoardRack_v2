import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #ffab003b;
  border-top: 5px solid orange;
  margin-bottom: 10px;
  padding: 5px 10px;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #4e4e4e;
`;

const index = ({ isSold }) => {
  return (
    <Container>
      <Text>
        <ExclamationCircleOutlined style={{ color: "orange" }} />
        {isSold ? " This Board Has Sold" : " This Board Is No Longer Available"}
      </Text>
    </Container>
  );
};

export default index;
