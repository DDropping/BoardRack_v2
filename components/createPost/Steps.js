import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

const PostSteps = ({ step, handleChange }) => {
  return (
    <div>
      <Steps
        type="navigation"
        size="small"
        current={step}
        onChange={handleChange}
        className="site-navigation-steps"
      >
        <Step
          title="Create New Post"
          subTitle=""
          status="finish"
          description="Photos & Details"
        />
        <Step
          title="Optional Details"
          subTitle=""
          status="process"
          description="Dimensions & more"
        />
        <Step
          title="Publish Post"
          subTitle=""
          status="wait"
          description="Location & Confirm"
        />
      </Steps>
    </div>
  );
};

export default PostSteps;
