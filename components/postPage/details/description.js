import React from "react";
import { Col, Row } from "antd";

import { PostTitle } from "./style";

const index = ({ price, title, description }) => {
  return (
    <>
      {description && (
        <Row>
          <Col span={1} />
          <Col span={23}>
            <PostTitle>{"$" + price + " " + title}</PostTitle>
            <div style={{ marginBottom: "10px" }}>{description}</div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default index;
