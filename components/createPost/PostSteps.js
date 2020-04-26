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
        description="Photos & Details"
      />
      <Step
        title="Optional Details"
        subTitle=""
        description="Dimensions & more"
      />
      <Step
        title="Publish Post"
        subTitle=""
        description="Location & Confirm"
      />
    </Steps>
  );
};

export default PostSteps;
