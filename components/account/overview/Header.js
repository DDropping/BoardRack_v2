import react from "react";
import { Button } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Title = styled.div`
  font-size: 1.25rem;
  cursor: pointer;
`;

const Header = ({ title, link, buttonText }) => {
  return (
    <Container>
      <Link href={link} shallow={true}>
        <Title>{title}</Title>
      </Link>
      <div style={{ flex: 1 }} />
      <Link href={link} shallow={true}>
        <Button type="primary">
          <AppstoreOutlined /> {buttonText}
        </Button>
      </Link>
    </Container>
  );
};

export default Header;
