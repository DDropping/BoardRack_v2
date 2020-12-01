import React from "react";
import Link from "next/link";

import { Container } from "./style";
import Images from "./Images";
import Content from "./Content";
import Counters from "./Counters";

const index = ({ postData, directToPostPage }) => {
  const countersData = {
    postId: postData._id,
    price: postData.price,
    favorites: postData.favorites,
    viewCount: postData.viewCount,
  };
  const imageData = {
    image: postData.images[0],
    isAvailable: postData.isAvailable,
    isSold: postData.isSold,
  };
  const contentData = {
    title: postData.title,
    lengthFt: postData.lengthFt,
    lengthIn: postData.lengthIn,
    width: postData.width,
    depth: postData.depth,
    volume: postData.volume,
    condition: postData.condition,
    location: postData.location,
    shaper: postData.shaper,
    model: postData.model,
  };

  return (
    <Link
      scroll={false}
      href={
        directToPostPage
          ? `/postdetails/${postData._id}`
          : `/?postId=${postData._id}`
      }
      as={`/postdetails/${postData._id}`}
    >
      <Container>
        <Images data={imageData} />
        <Content data={contentData} />
        <Counters data={countersData} />
      </Container>
    </Link>
  );
};

export default index;
