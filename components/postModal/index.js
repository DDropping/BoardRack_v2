import React from 'react';
import { useRouter } from 'next/router';

import PostPage from '../postPage';

const index = ({ postId }) => {
  const router = useRouter();

  function closeModal() {
    router.push('/');
  }

  return (
    <div>
      <PostPage />
      <button onClick={() => closeModal()}>close</button>
    </div>
  );
};

export default index;
