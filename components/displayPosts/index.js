import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

import baseUrl from '../../utils/baseUrl';
import PostCard from '../postCard';
import PostModal from '../postModal';
import { Container, Li } from './style';

const index = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    async function fetchData() {
      const url = `${baseUrl}/api/posts/allPosts`;
      const res = await axios.get(url);
      setPosts(res.data);
    }
    fetchData();
  }, []);

  return (
    <Container id="__br_displayPosts">
      <PostModal quickData={posts} />
      {posts.map((post, index) => {
        return (
          <Li key={index}>
            <Link
              scroll={false}
              href={`/?postId=${post._id}`}
              as={`/postdetails/${post._id}`}
            >
              <a>
                <PostCard key={index} postData={post} />
              </a>
            </Link>
          </Li>
        );
      })}
    </Container>
  );
};

export default index;
