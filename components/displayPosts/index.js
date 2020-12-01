import React from "react";
import { useSelector } from "react-redux";

import { Container, Ul, Li, UlList } from "./style";
import PostCard from "../postCard";
import PostModal from "../postModal";
import LoadingScreenCard from "../loadingScreens/postCard";

import PostListRow from "../postListRow";

const index = ({ posts, isLoading }) => {
  const layout = useSelector((state) => state.filters.layout);
  let loadingCards = [];
  for (let i = 0; i < 20; ++i) {
    loadingCards.push(<LoadingScreenCard key={i} />);
  }

  return (
    <Container>
      {isLoading && loadingCards}
      <PostModal quickData={posts} />
      {layout === "Gallery" && (
        <Ul>
          {posts.map((post, index) => {
            return (
              <Li key={index}>
                <PostCard key={index} postData={post} />
              </Li>
            );
          })}
        </Ul>
      )}
      {layout === "Thumbnail" && (
        <UlList>
          {posts.map((post, index) => {
            return (
              <Li key={index}>
                <PostListRow key={index} postData={post} />
              </Li>
            );
          })}
        </UlList>
      )}
    </Container>
  );
};

export default index;
