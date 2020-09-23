import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";

import LogoWhite from "../logo/DefaultLogoWhite";
import Company from "./Company";
import Policy from "./Policy";
import Social from "./Social";
import Subscribe from "./Subscribe";
import Support from "./Support";

const Container = styled.section`
  width: 100%;
  color: ${({ theme }) => theme.secondaryWhite};
  background-color: ${(props) => props.theme.primaryBlue};
  text-align: center;
  margin-top: 10px;
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 1.25rem;
`;

const index = () => {
  return (
    <Container>
      <Row>
        <Col xs={24} sm={12} md={8} lg={8}>
          <LogoWhite />
          <Policy />
        </Col>
        <Col xs={12} sm={6} md={8} lg={4}>
          <Title>Company</Title>
          <Company />
        </Col>
        <Col xs={12} sm={6} md={8} lg={4}>
          <Title>Support</Title>
          <Support />
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Title>Subscribe to our Newsletter:</Title>
          <Subscribe />
          <Social />
        </Col>
      </Row>
    </Container>
  );
};

export default index;
