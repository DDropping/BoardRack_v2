import React from 'react';

import { CardContainer } from './style';
import Header from './Header';
import Images from './Images';
import Content from './Content';

const index = ({ postData }) => {
  const headerData = {
    postId: postData._id,
    price: postData.price,
    favorites: postData.favorites,
    viewCount: postData.viewCount,
  };
  const imageData = {
    image: postData.images[0],
  };
  const contentData = {
    title: postData.title,
    lengthFt: postData.lengthFt,
    lengthIn: postData.lengthIn,
    width: postData.width,
    depth: postData.depth,
    volume: postData.volume,
  };
  return (
    <CardContainer>
      <Header data={headerData} />
      <Images data={imageData} />
      <Content data={contentData} />
    </CardContainer>
  );
};

export default index;
