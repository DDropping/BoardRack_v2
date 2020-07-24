import React, { useState, useEffect } from "react";
import axios from "axios";

import { ContainerOutline, Title } from "./style";
import baseUrl from "../../../utils/baseUrl";
import PostCard from "./PostCard";
import LoadingSimilarCard from "../../loadingScreens/similarPosts";

const index = ({ postId }) => {
  const [isLoading, setLoading] = useState(true);
  const [similarPosts, setSimilarPosts] = useState([]);

  let loadingCards = [];
  for (let i = 0; i < 3; ++i) {
    loadingCards.push(<LoadingSimilarCard key={i} />);
  }

  useEffect(() => {
    const fetchSimilarPosts = async () => {
      const result = await axios.get(
        `${baseUrl}/api/posts/similarPosts/${postId}`
      );
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
