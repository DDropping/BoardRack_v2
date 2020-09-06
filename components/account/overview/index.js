import React from "react";
import { useSelector } from "react-redux";
import { Divider } from "antd";

import { Container, SectionContainer, Separator } from "./style";
import { headerStyle } from "../style";
import MyMessages from "../myMessages/displayData";
import MyPosts from "../myPosts/displayData";
import MyFavorites from "../myFavorites/displayData";
import Header from "./Header";

const Index = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <Container>
      <SectionContainer>
        {isAuthenticated && user.messages.length > 0 && (
          <Header
            title="My Messages"
            link="/account?view=messages"
            buttonText="View All"
          />
        )}
        <MyMessages preview={true} />
      </SectionContainer>

      <Separator />

      <SectionContainer>
        {isAuthenticated && user.messages.length > 0 && (
          <Header
            title="My Boardrack"
            link="/account?view=posts"
            buttonText="View All"
          />
        )}
        <MyPosts preview={true} />
      </SectionContainer>

      <Separator />

      <SectionContainer>
        {isAuthenticated && user.messages.length > 0 && (
          <Header
            title="My Favorites"
            link="/account?view=favorites"
            buttonText="View All"
          />
        )}
        <MyFavorites preview={true} />
      </SectionContainer>
    </Container>
  );
};

export default Index;
