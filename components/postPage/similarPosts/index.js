import React, { useState, useEffect } from "react";
import axios from "axios";

import { ContainerOutline, Title, PostCardsContainer } from "./style";
import baseUrl from "../../../utils/baseUrl";
import PostCard from "./PostCard";
import LoadingSimilarCard from "../../loadingScreens/similarPosts";

const index = ({ postId, boardType, volumeValue }) => {
  const [isLoading, setLoading] = useState(true);
  const [similarPosts, setSimilarPosts] = useState([]);

  let loadingCards = [];
  for (let i = 0; i < 3; ++i) {
    loadingCards.push(<LoadingSimilarCard key={i} />);
  }

  useEffect(() => {
    const fetchSimilarPosts = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      //stringify the form items
      const body = JSON.stringify({
        postId,
        boardType,
        volumeValue,
      });
      const url = `${baseUrl}/api/posts/similarposts`;
      const result = await axios.post(url, body, config);
      if (result) {
        setSimilarPosts(result.data);
        setLoading(false);
      }
    };
    fetchSimilarPosts();
  }, [postId]);

  return (
    <ContainerOutline>
      <Title>People also viewed</Title>
      {isLoading && loadingCards}
      {similarPosts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </ContainerOutline>
  );
};

export default index;
