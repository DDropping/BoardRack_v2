import React from "react";
import { Col, Row } from "antd";

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
        <Col xs={20} sm={15} md={15} lg={10} style={{ display: "flex" }}>
          <LocationSelector />
        </Col>
      </Row>
    </Container>
  );
};

export default Location;
