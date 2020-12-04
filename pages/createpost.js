import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";

import Step4 from "../components/createPost/step4";
import Step3 from "../components/createPost/step3";
import Step2 from "../components/createPost/step2";
import Step1 from "../components/createPost/step1";
import PostSteps from "../components/createPost/PostSteps";
import NavButtons from "../components/createPost/NavButtons";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const CreatePost = () => {
  const [step, setStep] = useState(0);

  const handleStepChange = (current) => {
    setStep(current);
  };

  return (
    <Container>
      <Head>
        <title>BoardRack | Create Post</title>
        <meta
          name='description'
          content='Sell your new or used surfboards on BoardRack by creating a new post.'
        />
      </Head>
      <PostSteps step={step} handleStepChange={handleStepChange} />
      <div style={{ flex: 1 }}>
        {step === 0 && <Step1 />}
        {step === 1 && <Step2 />}
        {step === 2 && <Step3 />}
        {step === 3 && (
          <>
            <NavButtons step={step} handleStepChange={handleStepChange} />
            <Step4 />
          </>
        )}
      </div>
      <NavButtons step={step} handleStepChange={handleStepChange} />
    </Container>
  );
};

export default CreatePost;
