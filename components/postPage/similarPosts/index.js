import React, { useState, useEffect } from "react";
import axios from "axios";

import { ContainerOutline, Title } from "./style";
import baseUrl from "../../../utils/baseUrl";
import PostCard from "./PostCard";

const index = ({ postId }) => {
  const [similarPosts, setSimilarPosts] = useState([]);

  useEffect(() => {
    const fetchSimilarPosts = async () => {
      const result = await axios.get(
        `${baseUrl}/api/posts/similarPosts/${postId}`
      );
      if (result) {
        setSimilarPosts(result.data);
      }
    };
    fetchSimilarPosts();
  }, [postId]);

  return (
    <ContainerOutline>
      <Title>People also viewed</Title>
      {similarPosts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </ContainerOutline>
  );
};

export default index;
