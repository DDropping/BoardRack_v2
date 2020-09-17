import React from "react";
import { Button, Col, Input, Row } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

import { Container, Title } from "./style";

const Location = ({ user, userData, setUserData }) => {
  const location = user
    ? user.location.city +
      ", " +
      user.location.state +
      " " +
      user.location.postalCode
    : "Location Not Found";

  return (
    <Container>
      <Row>
        <Col xs={1} sm={1} md={3} lg={5} />
        <Title>Location</Title>
      </Row>

      <Row gutter={[8, 8]}>
        <Col xs={2} sm={2} md={4} lg={6} />
        <Col xs={10} sm={10} md={8} lg={6}>
          Default Location:
        </Col>
        <Col xs={10} sm={10} md={8} lg={6}>
          <Input
            value={userData.defaultLocation}
            placeholder={location}
            onChange={(e) =>
              setUserData({ ...userData, defaultLocation: e.target.value })
            }
          />
        </Col>
        <Col>
          <Button>
            <EnvironmentOutlined />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Location;
