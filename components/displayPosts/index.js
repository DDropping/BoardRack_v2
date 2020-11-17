import React from "react";

import { Container, Li } from "./style";
import PostCard from "../postCard";
import PostModal from "../postModal";
import LoadingScreenCard from "../loadingScreens/postCard";

const index = ({ posts, isLoading }) => {
  let loadingCards = [];
  for (let i = 0; i < 20; ++i) {
    loadingCards.push(<LoadingScreenCard key={i} />);
  }

  return (
    <Container>
      {isLoading && loadingCards}
      <PostModal quickData={posts} />
      {posts.map((post, index) => {
        return (
          <Li key={index}>
            <PostCard key={index} postData={post} />
          </Li>
        );
      })}
    </Container>
  );
};

export default index;
