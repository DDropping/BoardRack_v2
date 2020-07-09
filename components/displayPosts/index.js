import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Li } from "./style";
import baseUrl from "../../utils/baseUrl";
import PostCard from "../postCard";
import PostModal from "../postModal";
import LoadingScreen from "../loadingScreens/displayPosts";

const index = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

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
      {isLoading && <LoadingScreen />}
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
