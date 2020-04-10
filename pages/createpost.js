import React, { useState } from 'react';
import Head from 'next/head';

import Step3 from '../components/createPost/step3';
import Step2 from '../components/createPost/step2';
import Step1 from '../components/createPost/step1';
import PostSteps from '../components/createPost/Steps';

const CreatePost = () => {
  const [step, setStep] = useState(0);
  const [post, setPost] = useState({});

  const handleStepChange = current => {
    setStep(current);
  };

  function handlePostChange(event) {
    const { name, value } = event.target;
    //post input validation
    if (name === 'price' && isNaN(value)) return;
    setPost(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(post);
  }

  function handlePostChange(name, value) {
    setPost(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(post);
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Head>
        <title>BoardRack | Create Post</title>
      </Head>
      <PostSteps step={step} handleStepChange={handleStepChange} />
      {step === 0 && <Step1 post={post} handlePostChange={handlePostChange} />}
      {step === 1 && <Step2 post={post} handlePostChange={handlePostChange} />}
      {step === 2 && <Step3 post={post} handlePostChange={handlePostChange} />}
    </div>
  );
};

export default CreatePost;
