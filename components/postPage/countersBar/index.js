import React from "react";
import { Col, Row } from "antd";

import { CountersContainer } from "./style";
import timeAgo from "../../../utils/timeAgo";

const index = ({ date, views, favorites }) => {
  let time = timeAgo(date);

  return (
    <CountersContainer>
      <Row>
        <Col style={{ textAlign: "center" }} span={8}>
          <div>Listed</div>
          <strong>{time}</strong>
        </Col>
        <Col style={{ textAlign: "center" }} span={8}>
          <div>Views</div>
          <strong>{views}</strong>
        </Col>
        <Col style={{ textAlign: "center" }} span={8}>
          <div>Favorites</div>
          <strong>{favorites.length}</strong>
        </Col>
      </Row>
    </CountersContainer>
  );
};

export default index;
