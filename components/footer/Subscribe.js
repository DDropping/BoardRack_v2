import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

const Subscribe = () => {
  return (
    <Wrapper>
      <Input placeholder="Email" />
    </Wrapper>
  );
};

export default Subscribe;
