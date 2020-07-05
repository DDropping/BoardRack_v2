import React, { useEffect, useState } from "react";
import axios from "axios";

import baseUrl from "../../utils/baseUrl";
import PostCard from "../postCard";
import PostModal from "../postModal";
import { Container, Li } from "./style";

const index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `${baseUrl}/api/posts/postdetails`;
      const res = await axios.get(url);
      setPosts(res.data);
    }
    fetchData();
  }, []);

  return (
    <Container>
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
