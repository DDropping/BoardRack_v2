import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import baseUrl from '../../utils/baseUrl';
import PostCard from '../postCard';

const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  flex: 1;
`;

const index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `${baseUrl}/api/posts/allPosts`;
      const res = await axios.get(url);
      setPosts(res.data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      {posts.map((post, index) => {
        return <PostCard key={index} postData={post} />;
      })}
    </Container>
  );
};

export default index;
