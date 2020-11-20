import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import styled from "styled-components";
import axios from "axios";

import baseUrl from "../utils/baseUrl";
import Carousel from "../components/carousel";
import FiltersBar from "../components/filtersBar";
import FiltersBox from "../components/filtersBox";
import PostList from "../components/displayPosts";

const FiltersPostsContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.sm}) {
    display: flex;
  }
`;

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const { lat, lng } = useSelector((state) => state.currentLocation.location);
  const filters = useSelector((state) => state.filters);
  const {
    price,
    boardType,
    condition,
    length,
    width,
    depth,
    volume,
    distance,
  } = filters;

  //fetch lists of posts
  const fetchPosts = async () => {
    setLoading(true);

    try {
      //set headers for request
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      //stringify the form items
      const filtersData = {
        price,
        boardType,
        condition,
        length,
        width,
        depth,
        volume,
        distance,
        lat,
        lng,
      };
      const body = JSON.stringify(filtersData);

      //fetch posts
      const url = `${baseUrl}/api/posts/postdetails`;
      const res = await axios.post(url, body, config);
      setPosts(res.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  //automatically fetch list of post on render
  useEffect(
    () => {
      fetchPosts();
    },
    [
      /* filters */
    ]
  );

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
            <FiltersBox fetchPosts={fetchPosts} />
          </div>
          <PostList posts={posts} isLoading={isLoading} />
        </FiltersPostsContainer>
      </div>
    </div>
  );
};

// Home.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

export default Home;
