import React from "react";
import { Divider } from "antd";

import { Container, SectionContainer, Separator } from "./style";
import { headerStyle } from "../style";
import MyMessages from "../messages/displayData";
import MyPosts from "../posts/displayData";
import MyFavorites from "../favorites/displayData";

const index = () => {
  return (
    <Container>
      <SectionContainer>
        <Divider orientation="left" style={headerStyle}>
          Recent Messages
        </Divider>
        <MyMessages preview={true} />
      </SectionContainer>

      <Separator />

      <SectionContainer>
        <Divider orientation="left" style={headerStyle}>
          My Boardrack
        </Divider>
        <MyPosts preview={true} />
      </SectionContainer>

      <Separator />

      <SectionContainer>
        <Divider orientation="left" style={headerStyle}>
          My Favorites
        </Divider>
        <MyFavorites preview={true} />
      </SectionContainer>
    </Container>
  );
};

export default index;
