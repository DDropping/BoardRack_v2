import React from "react";
import { Skeleton } from "antd";

import { Container, Dimensions } from "../../postList/style";

const index = () => {
  return (
    <Container>
      <div>
        <Skeleton.Input
          style={{ width: 50, margin: "5px" }}
          active={true}
          size={18}
        />
      </div>

      <div>
        <Skeleton.Input
          style={{ width: 250, margin: "5px" }}
          active={true}
          size={18}
        />
      </div>

      <Dimensions>
        <Skeleton.Input
          style={{ width: 100, margin: "5px" }}
          active={true}
          size={18}
        />
      </Dimensions>
    </Container>
  );
};

export default index;
