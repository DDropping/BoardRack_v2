import React from "react";
import { Skeleton } from "antd";

import {
  CardContainer,
  HeaderContainer,
  ImageContainer,
  ContentContainer,
} from "../../postCard/style";

const index = () => {
  return (
    <CardContainer>
      <HeaderContainer>
        <div style={{ display: "flex", width: "100%" }}>
          <div>
            <Skeleton.Input
              style={{ width: 50, margin: "5px" }}
              active={true}
              size={18}
            />
          </div>
          <div style={{ flex: 1 }} />
          <div>
            <Skeleton.Input
              style={{ width: 40, margin: "5px" }}
              active={true}
              size={18}
            />
          </div>
          <div>
            <Skeleton.Input
              style={{ width: 40, margin: "5px" }}
              active={true}
              size={18}
            />
          </div>
        </div>
      </HeaderContainer>
      <ImageContainer />
      <ContentContainer>
        <Skeleton.Input
          style={{ width: 150, margin: "5px" }}
          active={true}
          size={18}
        />
        <br />
        <Skeleton.Input
          style={{ width: 250, margin: "5px" }}
          active={true}
          size={18}
        />
      </ContentContainer>
    </CardContainer>
  );
};

export default index;
