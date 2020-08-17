import React from "react";
import { Divider } from "antd";

import { headerStyle } from "../style";
import MyPosts from "../../displayPosts/myPosts";

const index = () => {
  return (
    <div>
      <Divider orientation="left" style={headerStyle}>
        My Boardrack
      </Divider>
      <MyPosts />
    </div>
  );
};

export default index;
