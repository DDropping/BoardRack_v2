import React from "react";
import { Skeleton } from "antd";

import {
  Container,
  ImageContainer,
  ImageBackgroundWrapper,
  ImageWrapper,
  ContentContainer,
  ContnetTitle,
} from "../../postThumbnail/style";

const index = () => {
  return (
    <Container>
      <ImageContainer></ImageContainer>
      <ContentContainer>
        <div>
          <Skeleton.Input
            style={{ width: 300, margin: "5px" }}
            active={true}
            size={18}
          />
        </div>
        <div>
          <Skeleton.Input
            style={{ width: 150, margin: "5px" }}
            active={true}
            size={18}
          />
        </div>
        <div>
          <Skeleton.Input
            style={{ width: 200, margin: "5px" }}
            active={true}
            size={18}
          />
        </div>
        <div>
          <Skeleton.Input
            style={{ width: 150, margin: "5px" }}
            active={true}
            size={18}
          />
        </div>
      </ContentContainer>
    </Container>
  );
};

export default index;
