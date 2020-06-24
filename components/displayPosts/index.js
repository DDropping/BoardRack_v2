import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import styled from 'styled-components';

import baseUrl from '../../utils/baseUrl';
import PostCard from '../postCard';

const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  flex: 1;
  li {
    list-style-type: none;
    a {
      :hover {
        color: ${({ theme }) => theme.primaryBlack};
      }
    }
  }
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
        return (
          <li key={index}>
            <Link
              href={`/postdetails/[postId]?postId=${post._id}`}
              as={`/postdetails/${post._id}`}
            >
              <a>
                <PostCard key={index} postData={post} />
              </a>
            </Link>
          </li>
        );
      })}
    </Container>
  );
};

export default index;
