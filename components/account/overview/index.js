import React from "react";
import { Divider } from "antd";

import { Container, SectionContainer } from "./style";
import { headerStyle } from "../style";
import ViewAllButton from "../ViewAllButton";
import MyPosts from "../../displayPosts/myPosts";

const index = () => {
  return (
    <Container>
      <SectionContainer>
        <Divider orientation="left" style={headerStyle}>
          My Boardrack
        </Divider>
        <ViewAllButton link="/account?view=posts" />
        <MyPosts />
      </SectionContainer>
      <br />
      <SectionContainer>
        <Divider orientation="left" style={headerStyle}>
          My Favorites
        </Divider>
        <ViewAllButton link="/account?view=posts" />
        <MyPosts />
      </SectionContainer>
    </Container>
  );
};

export default index;
