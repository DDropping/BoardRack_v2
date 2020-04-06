import react, { useState } from 'react';
import Head from 'next/head';
import { Button } from 'antd';
import styled from 'styled-components';

import PostSteps from '../components/createPost/Steps';

const CreatePost = () => {
  const [step, setStep] = useState(0);

  const handleChange = current => {
    setStep(current);
  };
  return (
    <div className="container">
      <Head>
        <title>BoardRack | Create Post</title>
      </Head>
      <div>Create Post</div>
      <PostSteps step={step} handleChange={handleChange} />
    </div>
  );
};

export default CreatePost;
