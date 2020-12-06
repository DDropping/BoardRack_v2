import React from "react";
import { useSelector } from "react-redux";

import { Container, Ul, Li, UlList } from "./style";
import PostCard from "../postCard";
import PostModal from "../postModal";
import LoadingScreenCard from "../loadingScreens/postCard";
import NoPostsFound from "./NoPostsFound";

import PostThumbnail from "../postThumbnail";
import PostList from "../postList";

const index = ({ posts, isLoading }) => {
  const layout = useSelector((state) => state.filters.layout);
  const resultsPerPage = useSelector((state) => state.filters.resultsPerPage);
  const { numberOfResultsFound } = useSelector((state) => state.filters);
  let loadingCards = [];
  for (let i = 0; i < resultsPerPage; ++i) {
    loadingCards.push(<LoadingScreenCard key={i} />);
  }

  return (
    <Container>
      {numberOfResultsFound < 1 && <NoPostsFound />}
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
                <PostThumbnail key={index} postData={post} />
              </Li>
            );
          })}
        </UlList>
      )}
      {layout === "List" && (
        <UlList>
          {posts.map((post, index) => {
            return (
              <Li key={index}>
                <PostList key={index} postData={post} />
              </Li>
            );
          })}
        </UlList>
      )}
    </Container>
  );
};

export default index;
