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
        {...(step === 0 ? (status = 'process') : (status = 'wait'))}
        description="Photos & Details"
      />
      <Step
        title="Optional Details"
        subTitle=""
        {...(step === 1 ? (status = 'process') : (status = 'wait'))}
        description="Dimensions & more"
      />
      <Step
        title="Publish Post"
        subTitle=""
        {...(step === 2 ? (status = 'process') : (status = 'wait'))}
        description="Location & Confirm"
      />
    </Steps>
  );
};

export default PostSteps;
