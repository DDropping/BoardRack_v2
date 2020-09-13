import React from "react";
import { Button, Col, Row } from "antd";

import { Container, Title } from "./style";

const ManageAccount = ({ user }) => {
  return (
    <Container>
      <Row>
        <Col xs={1} sm={1} md={3} lg={5} />
        <Title>Management</Title>
      </Row>

      <Row gutter={[0, 8]}>
        <Col xs={2} sm={2} md={4} lg={6} />
        <Col xs={10} sm={10} md={8} lg={6}>
          Subscribe to Newsletter:
        </Col>
        <Col xs={10} sm={10} md={8} lg={6}>
          <Button>Subscribe</Button>
        </Col>
      </Row>
      <Row gutter={[0, 8]}>
        <Col xs={2} sm={2} md={4} lg={6} />
        <Col xs={10} sm={10} md={8} lg={6}>
          Deactivate My Account:
        </Col>
        <Col xs={10} sm={10} md={8} lg={6}>
          <Button type="danger">Deactivate</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageAccount;
