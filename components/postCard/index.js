import React from 'react';

import { CardContainer } from './style';
import Header from './Header';
import Content from './Content';

const index = ({ postData }) => {
  console.log(postData);
  return (
    <CardContainer>
      <Header />
      <Content />
    </CardContainer>
  );
};

export default index;
