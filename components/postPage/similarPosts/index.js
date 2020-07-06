import React, { useState, useEffect } from "react";
import axios from "axios";

import { ContainerOutline, Title } from "./style";

const index = ({ postId }) => {
  const [similarPosts, setSimilarPosts] = useState([]);

  //   useEffect(() => {
  //     const fetchSimilarPosts = async () => {
  //       const result = await axios.get(`api/posts/similarPosts/${postId}`);
  //       setSimilarPosts(result.data);
  //     };
  //     fetchSimilarPosts();
  //   }, [postId]);

  return (
    <ContainerOutline>
      <Title>People also viewed</Title>
    </ContainerOutline>
  );
};

export default index;
