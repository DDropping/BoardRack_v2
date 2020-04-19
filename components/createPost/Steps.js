import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

const PostSteps = ({ step, handleStepChange }) => {
  return (
    <Steps
      type="navigation"
      size="small"
      current={step}
      onChange={handleStepChange}
      className="site-navigation-steps"
    >
      <Step
        title="Create New Post"
        subTitle=""
        status={
          (step === 0 && 'process') ||
          (step === 1 && 'finish') ||
          (step === 2 && 'finish')
        }
        description="Photos & Details"
      />
      <Step
        title="Optional Details"
        subTitle=""
        status={
          (step === 0 && 'wait') ||
          (step === 1 && 'process') ||
          (step === 2 && 'finish')
        }
        description="Dimensions & more"
      />
      <Step
        title="Publish Post"
        subTitle=""
        status={
          (step === 0 && 'wait') ||
          (step === 1 && 'wait') ||
          (step === 2 && 'process')
        }
        description="Location & Confirm"
      />
    </Steps>
  );
};

export default PostSteps;
