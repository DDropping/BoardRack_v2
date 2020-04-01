import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import { DefaultLogo } from '../logo';
import NavItems from './NavItems';
import SearchBar from './SearchBar';

const Container = styled.div`
  width: 100vw;
  height: 65px;
`;

const index = () => {
  return (
    <Container>
      <Row>
        <Col flex="200px">
          <DefaultLogo />
        </Col>
        <Col flex="auto">
          <SearchBar />
        </Col>
        <Col flex="23rem">
          <NavItems />
        </Col>
      </Row>
    </Container>
  );
};

export default index;
