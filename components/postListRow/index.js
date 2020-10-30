import React from "react";

import { Container } from "./style";
import Images from "./Images";
import Content from "./Content";
import Counters from "./Counters";

const index = ({ postData }) => {
  const countersData = {
    postId: postData._id,
    price: postData.price,
    favorites: postData.favorites,
    viewCount: postData.viewCount,
  };
  const imageData = {
    image: postData.images[0],
    isNoLongerAvailable: postData.isNoLongerAvailable,
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
    <Container>
      <Images data={imageData} />
      <Content data={contentData} />
      <Counters data={countersData} />
    </Container>
  );
};

export default index;
