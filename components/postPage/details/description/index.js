import React from "react";
import { Row, Col } from "antd";

const index = ({ description }) => {
  return (
    <>
      {description && (
        <Row>
          <Col span={1} />
          <Col span={23}>
            <div style={{ margin: "10px 0" }}>{description}</div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default index;
