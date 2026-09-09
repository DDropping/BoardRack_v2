import React from "react";
import { Steps } from "antd";

// antd v5 replaced <Steps><Step/></Steps> children with an `items` array.
const items = [
  {
    title: "Create New Post",
    subTitle: "",
    description: "Photos & Details",
  },
  {
    title: "Optional Details",
    subTitle: "",
    description: "Dimensions & more",
  },
  {
    title: "Publish Post",
    subTitle: "",
    description: "Location & Confirm",
  },
];

const PostSteps = ({ step, handleStepChange }) => {
  return (
    <Steps
      type='navigation'
      size='small'
      current={step}
      onChange={handleStepChange}
      className='site-navigation-steps'
      items={items}
    />
  );
};

export default PostSteps;
