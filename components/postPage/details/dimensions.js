import React from "react";
import { Col, Row } from "antd";

import { ContainerNoOutline, Title, ItemKey, ItemValue } from "./style";

const index = ({ post }) => {
  return (
    <>
      {(post.lengthFt ||
        post.lengthIn ||
        post.width ||
        post.depth ||
        post.volume) && (
        <ContainerNoOutline>
          <Title>Dimensions</Title>
          <Row>
            <Col xs={12} sm={10} md={8} lg={8}>
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
        </ContainerNoOutline>
      )}
    </>
  );
};

export default index;
