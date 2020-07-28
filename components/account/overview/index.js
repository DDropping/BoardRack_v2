import React from "react";

import { Container } from "./style";
import ViewAllButton from "../ViewAllButton";
import MyPosts from "../../displayPosts/myPosts";

const index = () => {
  return (
    <Container>
      <div>overview</div>
      <ViewAllButton link="/account?view=posts" />
      <MyPosts />
    </Container>
  );
};

export default index;
