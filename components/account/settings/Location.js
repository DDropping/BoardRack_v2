import React from "react";
import { Button, Col, Input, Row } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

import { Container, Title } from "./style";
import LocationSelector from "../../filtersBox/Location";

const Location = () => {
  return (
    <Container>
      <Row>
        <Col xs={1} sm={1} md={3} lg={5} />
        <Title>Location</Title>
      </Row>

      <Row gutter={[8, 8]}>
        <Col xs={2} sm={2} md={4} lg={6} />
        <Col xs={12} sm={10} md={10} lg={10} style={{ display: "flex" }}>
          <LocationSelector />
        </Col>
      </Row>
    </Container>
  );
};

export default Location;
