import React from "react";
import { Skeleton } from "antd";

import {
  Container,
  HeaderContainer,
  ContentContainer,
  TitleWrapper,
  MessageBodyWrapper,
  FooterContainer,
  TimeStampWrapper,
} from "../../messageCard/style";
import Avatar from "../../avatar";

const index = () => {
  return (
    <Container>
      <HeaderContainer>
        <Avatar size={28} />
        <div style={{ marginLeft: "5px" }}>
          {" "}
          <Skeleton.Input
            style={{ width: 100, margin: "5px" }}
            active={true}
            size={18}
          />
        </div>
      </HeaderContainer>

      <ContentContainer>
        <TitleWrapper>
          <Skeleton.Input
            style={{ width: 100, margin: "5px" }}
            active={true}
            size={18}
          />
        </TitleWrapper>
        <MessageBodyWrapper>
          <Skeleton.Input
            style={{ width: 300, margin: "5px" }}
            active={true}
            size={18}
          />
          <Skeleton.Input
            style={{ width: 200, margin: "5px" }}
            active={true}
            size={18}
          />
        </MessageBodyWrapper>
        <div style={{ flex: 1 }} />
      </ContentContainer>

      <FooterContainer>
        <TimeStampWrapper>
          <Skeleton.Input
            style={{ width: 80, margin: "5px" }}
            active={true}
            size={18}
          />
        </TimeStampWrapper>
      </FooterContainer>
    </Container>
  );
};

export default index;
