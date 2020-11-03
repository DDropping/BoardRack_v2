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

const NoDataFoundMessage = ({ title, subtitle, buttonText, link }) => {
  return (
    <Container>
      {title && <Text>{title}</Text>}
      {subtitle && <Text>{subtitle}</Text>}
      {buttonText && link && (
        <Link href={link}>
          <Button type="primary" size="large">
            {buttonText}
          </Button>
        </Link>
      )}
    </Container>
  );
};

export default NoDataFoundMessage;
