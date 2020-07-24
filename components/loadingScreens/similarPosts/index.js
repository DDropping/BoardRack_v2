import React from "react";
import { Skeleton } from "antd";

import {
  CardContainer,
  ImageContainer,
  ImageBackgroundWrapper,
  DetailsContainer,
} from "../../postPage/similarPosts/style";

const index = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <ImageBackgroundWrapper />
      </ImageContainer>
      <DetailsContainer>
        <Skeleton.Input
          style={{ width: 80, margin: "5px" }}
          active={true}
          size={14}
        />
        <Skeleton.Input
          style={{ width: 100, margin: "5px" }}
          active={true}
          size={14}
        />
      </DetailsContainer>
    </CardContainer>
  );
};

export default index;
