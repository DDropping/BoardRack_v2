import React from "react";
import { Row, Col } from "antd";

const index = ({ description }) => {
  return (
    <>
      {description && (
        <Row>
          <Col span={1} />
          <Col span={23}>
            <div>{description}</div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default index;
