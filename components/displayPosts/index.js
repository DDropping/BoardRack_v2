import React from "react";
import { useSelector } from "react-redux";

import { Container, Ul, Li, UlList } from "./style";
import PostModal from "../postModal";
import NoPostsFound from "./NoPostsFound";

import PostCard from "../postCard";
import PostThumbnail from "../postThumbnail";
import PostList from "../postList";

import LoadingScreenCard from "../loadingScreens/postCard";
import LoadingScreenThumbnail from "../loadingScreens/postThumbnail";
import LoadingScreenList from "../loadingScreens/postList";

const index = ({ posts, isLoading }) => {
  const layout = useSelector((state) => state.filters.layout);
  const resultsPerPage = useSelector((state) => state.filters.resultsPerPage);
  const { numberOfResultsFound } = useSelector((state) => state.filters);
  let loadingCards = [];
  for (let i = 0; i < resultsPerPage; ++i) {
    if (layout === "Gallery") {
      loadingCards.push(<LoadingScreenCard key={i} />);
    } else if (layout === "Thumbnail") {
      loadingCards.push(<LoadingScreenThumbnail key={i} />);
    } else if (layout === "List") {
      loadingCards.push(<LoadingScreenList key={i} />);
    }
  }

  return (
    <Container>
      {!isLoading && numberOfResultsFound < 1 && <NoPostsFound />}
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
