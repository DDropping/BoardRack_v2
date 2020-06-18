import React, { useEffect, useState } from 'react';
import axios from 'axios';

import baseUrl from '../../utils/baseUrl';
import PostCard from '../postCard';

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
    <div>
      {posts.map((post, index) => {
        return <PostCard key={index} postData={post} />;
      })}
    </div>
  );
};

export default index;
