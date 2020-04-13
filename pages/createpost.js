import React, { useState } from 'react';
import Head from 'next/head';

import Step3 from '../components/createPost/step3';
import Step2 from '../components/createPost/step2';
import Step1 from '../components/createPost/step1';
import PostSteps from '../components/createPost/Steps';
import NavButtons from '../components/createPost/NavButtons';

const CreatePost = () => {
  const [step, setStep] = useState(2);

  const handleStepChange = current => {
    setStep(current);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Head>
        <title>BoardRack | Create Post</title>
      </Head>
      <PostSteps step={step} handleStepChange={handleStepChange} />
      {step === 0 && <Step1 />}
      {step === 1 && <Step2 />}
      {step === 2 && <Step3 />}
      <NavButtons step={step} handleStepChange={handleStepChange} />
    </div>
  );
};

export default CreatePost;
