import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import styled from 'styled-components';

import baseUrl from '../../utils/baseUrl';
import PostCard from '../postCard';
import PostModal from '../postModal';

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
  const router = useRouter();
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
      {!!router.query.postId && <PostModal postId={router.query.postId} />}
      {posts.map((post, index) => {
        return (
          <li key={index}>
            <Link href={`/?postId=${post._id}`} as={`/postdetails/${post._id}`}>
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
