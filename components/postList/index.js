import React from "react";
import Link from "next/link";

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
    <Link
      scroll={false}
      href={`/?postId=${postData._id}`}
      as={`/postdetails/${postData._id}`}
    >
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
    </Link>
  );
};

export default index;
