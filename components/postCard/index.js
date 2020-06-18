import React from 'react';

import { CardContainer } from './style';
import Header from './Header';
import Content from './Content';

const index = ({ postData }) => {
  const headerData = {
    price: postData.price,
    favorites: postData.favorites,
    viewCount: postData.viewCount,
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
      <Content data={contentData} />
    </CardContainer>
  );
};

export default index;
