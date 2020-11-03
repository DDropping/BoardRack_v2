import React from "react";
import styled from "styled-components";

import ViewCounter from "../counters/Views";
import FavoriteCounter from "../counters/Favorites";

const Container = styled.div`
  padding: 5px;
`;

const Counters = ({ data }) => {
  return (
    <Container>
      <ViewCounter count={data.viewCount} />
      <FavoriteCounter favorites={data.favorites} postId={data.postId} />
    </Container>
  );
};

export default Counters;
