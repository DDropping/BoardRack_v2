import React from "react";
import { Row, Col } from "antd";

import { Title, ItemKey, ItemValue } from "../style";

const index = ({ post }) => {
  return (
    <>
      {(post.lengthFt ||
        post.lengthIn ||
        post.width ||
        post.depth ||
        post.volume) && (
        <div>
          <Title>Dimensions</Title>
          <Row>
            <Col span={1} />
            <Col xs={11} sm={9} md={7} lg={7}>
              <ItemKey>{post.lengthFt && post.lengthIn && "Length: "}</ItemKey>
              <ItemKey>{post.width && "Width: "}</ItemKey>
              <ItemKey>{post.depth && "Depth: "}</ItemKey>
              <ItemKey>{post.volume && "Volume: "}</ItemKey>
            </Col>
            <Col xs={12} sm={14} md={16} lg={16}>
              <ItemValue>
                {post.lengthFt && post.lengthFt + "' "}
                {post.lengthIn && post.lengthIn + '"'}
              </ItemValue>
              <ItemValue>{post.width && post.width + '"'}</ItemValue>
              <ItemValue>{post.depth && post.depth + '"'}</ItemValue>
              <ItemValue>{post.volume && post.volume + " L"}</ItemValue>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default index;
