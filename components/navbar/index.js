import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import { DefaultLogo, SmallLogo } from '../logo';
import NavItems from './NavItems';
import SearchBar from './SearchBar';
import DrawerIcon from './DrawerIcon';

const Container = styled.div`
  width: 100vw;
  height: 65px;
  display: flex;
`;

const index = () => {
  return (
    <Container>
      <DefaultLogo />
      <SmallLogo />
      <SearchBar />
      <NavItems />
      <DrawerIcon />
    </Container>
  );
};

export default index;
