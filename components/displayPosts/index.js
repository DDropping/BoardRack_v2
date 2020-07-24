import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Li } from "./style";
import baseUrl from "../../utils/baseUrl";
import PostCard from "../postCard";
import PostModal from "../postModal";
import LoadingScreenCard from "../loadingScreens/postCard";

const index = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let loadingCards = [];
  for (let i = 0; i < 20; ++i) {
    loadingCards.push(<LoadingScreenCard key={i} />);
  }

  useEffect(() => {
    async function fetchData() {
      const url = `${baseUrl}/api/posts/postdetails`;
      const res = await axios.get(url);
      setPosts(res.data);
      setLoading(false);
    }
    fetchData();
  }, []);

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
