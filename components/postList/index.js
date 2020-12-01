import React from "react";

import ViewCounter from "../counters/Views";
import FavoriteCounter from "../counters/Favorites";

import { Container, Title, Dimensions, Counters } from "./style";

const index = ({ postData }) => {
  const length =
    postData.lengthFt && postData.lengthIn
      ? postData.lengthFt + "'" + postData.lengthIn + '" '
      : "-- ";
  const width = postData.width ? " " + postData.width + '" ' : " -- ";
  const depth = postData.depth ? " " + postData.depth + '" ' : " -- ";
  const volume = postData.volume ? postData.volume + "L" : " -- ";

  return (
    <Container>
      <Title>{"$" + postData.price + " " + postData.title}</Title>
      <Dimensions>
        (
        <strong>
          <i>{length}</i>
        </strong>
        x
        <strong>
          <i>{width}</i>
        </strong>
        x
        <strong>
          <i>{depth}</i>
        </strong>
        {" - "}
        <strong>
          <i>{volume}</i>
        </strong>
        )
      </Dimensions>
      <div style={{ flex: 1 }} />
      <Counters>
        <ViewCounter count={postData.viewCount} />
        <FavoriteCounter
          favorites={postData.favorites}
          postId={postData.postId}
        />
      </Counters>
    </Container>
  );
};

export default index;
