import React from 'react';

import { CardContainer } from './style';
import Header from './Header';
import Content from './Content';

const index = () => {
  return (
    <CardContainer>
      <Header />
      <Content />
    </CardContainer>
  );
};

export default index;
