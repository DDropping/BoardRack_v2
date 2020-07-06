import React from "react";
import { Row, Col } from "antd";

import { ContainerOutline, Title, ItemKey, ItemValue } from "./style";

const index = ({ post }) => {
  return (
    <>
      {(post.shaper ||
        post.model ||
        post.boardType ||
        post.condition ||
        post.tail ||
        post.finSystem ||
        post.finConfiguration ||
        post.construction ||
        post.glassing ||
        post.contour) && (
        <ContainerOutline>
          <Title>General Details</Title>
          <Row>
            <Col xs={12} sm={10} md={8} lg={8}>
              <ItemKey>{post.shaper && "Shaper: "}</ItemKey>
              <ItemKey>{post.model && "Model: "}</ItemKey>
              <ItemKey>{post.boardType && "Board Type: "}</ItemKey>
              <ItemKey>{post.condition && "Condition: "}</ItemKey>
              <ItemKey>{post.tail && "Tail Shape: "}</ItemKey>
              <ItemKey>
                {(post.finSystem || post.finConfiguration) && "Fin System: "}
              </ItemKey>
              <ItemKey>{post.construction && "Construction: "}</ItemKey>
              <ItemKey>{post.glassing && "Glassing: "}</ItemKey>
              <ItemKey>{post.contour && "Contour: "}</ItemKey>
            </Col>
            <Col xs={12} sm={14} md={16} lg={16}>
              <ItemValue>{post.shaper && post.shaper}</ItemValue>
              <ItemValue>{post.model && post.model}</ItemValue>
              <ItemValue>{post.boardType && post.boardType}</ItemValue>
              <ItemValue>{post.condition && post.condition}</ItemValue>
              <ItemValue>{post.tail && post.tail}</ItemValue>
              <ItemValue>
                {post.finSystem && post.finSystem + " "}
                {post.finConfiguration && "(" + post.finConfiguration + ")"}
              </ItemValue>
              <ItemValue>{post.construction && post.construction}</ItemValue>
              <ItemValue>{post.glassing && post.glassing}</ItemValue>
              <ItemValue>{post.contour && post.contour}</ItemValue>
            </Col>
          </Row>
        </ContainerOutline>
      )}
    </>
  );
};

export default index;
