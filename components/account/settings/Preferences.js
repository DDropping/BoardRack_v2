import React from "react";
import { Col, Row, Switch } from "antd";

import { Container, Title } from "./style";

const Preferences = ({ user }) => {
  const toggleDarkMode = (checked) => {
    console.log("dark mode: ", checked);
  };

  return (
    <Container>
      <Row>
        <Col xs={1} sm={1} md={3} lg={5} />
        <Title>Preferences</Title>
      </Row>

      <Row gutter={[8, 8]}>
        <Col xs={2} sm={2} md={4} lg={6} />
        <Col xs={10} sm={10} md={8} lg={6}>
          Dark Mode:
        </Col>
        <Col xs={10} sm={10} md={8} lg={6}>
          <Switch onChange={toggleDarkMode} />
        </Col>
      </Row>
    </Container>
  );
};

export default Preferences;
