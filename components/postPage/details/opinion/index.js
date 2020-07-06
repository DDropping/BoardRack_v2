import React from "react";
import { Row, Col } from "antd";

import { ContainerNoOutline, Title, OpinionKey, OpinionValue } from "../style";

const index = ({ post }) => {
  return (
    <>
      {(post.waveSize || post.drive || post.paddlePower || post.movability) && (
        <ContainerNoOutline>
          <Title>Surfer's Opinion</Title>
          <Row>
            <Col span={12}>
              <div>
                <OpinionKey>{post.waveSize && "Wave Size: "}</OpinionKey>
                <OpinionValue>
                  {post.waveSize && post.waveSize + " ft"}
                </OpinionValue>
              </div>
              <div>
                <OpinionKey>{post.drive && "Drive & Speed: "}</OpinionKey>
                <OpinionValue>{post.drive && post.drive + "/5"}</OpinionValue>
              </div>
            </Col>
            <Col span={12}>
              <div>
                <OpinionKey>{post.paddlePower && "Paddle Power: "}</OpinionKey>
                <OpinionValue>
                  {post.paddlePower && post.paddlePower + "/5"}
                </OpinionValue>
              </div>
              <div>
                <OpinionKey>{post.movability && "Movability: "}</OpinionKey>
                <OpinionValue>
                  {post.movability && post.movability + "/5"}
                </OpinionValue>
              </div>
            </Col>
          </Row>
        </ContainerNoOutline>
      )}
    </>
  );
};

export default index;
