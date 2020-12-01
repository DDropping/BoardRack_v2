import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import styled from "styled-components";

import Carousel from "../components/carousel";
import FiltersBar from "../components/filtersBar";
import FiltersBox from "../components/filtersBox";
import PostList from "../components/displayPosts";
import SortSelect from "../components/sortSelect";
import Pagination from "../components/pagination";
import { fetchPosts } from "../actions/fetchPosts";
import { UPDATE_RESULTS_PER_PAGE, UPDATE_CURRENT_PAGE } from "../actions/types";

const FiltersPostsContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.md1}) {
    display: flex;
  }
`;

const PostCountAndSortSelect = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  font-weight: bold;
`;

const PostCount = styled.div`
  margin: 5px 0;
`;

const Home = (props) => {
  const dispatch = useDispatch();
  const { lat, lng } = useSelector((state) => state.currentLocation.location);
  const {
    posts,
    sort,
    currentPage,
    resultsPerPage,
    numberOfResultsFound,
    isLoading,
    isError,
  } = useSelector((state) => state.filters);

  //automatically fetch list of post on render
  useEffect(() => {
    dispatch(fetchPosts());
  }, [lat, lng, sort, resultsPerPage]);

  return (
    <div>
      <Head>
        <title>BoardRack | Home</title>
      </Head>
      <div style={{ zIndex: 1, position: "relative" }}>
        <Carousel />
      </div>
      <div style={{ zIndex: 2, position: "relative" }}>
        <FiltersBar />
        <FiltersPostsContainer>
          <div>
            <FiltersBox fetchPosts={() => dispatch(fetchPosts())} />
          </div>
          <div style={{ flex: 1 }}>
            <PostCountAndSortSelect>
              <PostCount>
                {numberOfResultsFound > resultsPerPage ? (
                  <>
                    {(currentPage - 1) * resultsPerPage + 1}-
                    {currentPage * resultsPerPage > numberOfResultsFound
                      ? numberOfResultsFound
                      : currentPage * resultsPerPage}
                    {" / "}
                    {numberOfResultsFound} posts found
                  </>
                ) : (
                  <>{posts.length} posts found</>
                )}
              </PostCount>
              {posts.length > 0 && <SortSelect />}
            </PostCountAndSortSelect>
            <PostList posts={posts} isLoading={isLoading} />
          </div>
        </FiltersPostsContainer>
        <Pagination
          totalResults={numberOfResultsFound}
          resultsPerPage={resultsPerPage}
          currentPage={currentPage}
          setResultsPerPage={(value) =>
            dispatch({ type: UPDATE_RESULTS_PER_PAGE, payload: value })
          }
          setCurrentPage={(value) => {
            dispatch({ type: UPDATE_CURRENT_PAGE, payload: value });
            dispatch(fetchPosts());
          }}
        />
      </div>
    </div>
  );
};

export default Home;
