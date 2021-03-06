import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

const Wrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
  .ant-input-search-button {
    background-color: ${({ theme }) => theme.primaryWhite};
    border-color: ${({ theme }) => theme.secondaryBlue};
    color: ${({ theme }) => theme.primaryBlue};
    &:hover {
      background-color: ${({ theme }) => theme.primaryLightGrey};
      color: ${({ theme }) => theme.primaryBlack};
    }
  }
  .ant-input {
    border: 1px solid #01458a;
  }
  .ant-input-group-addon {
    background-color: ${({ theme }) => theme.primaryBlue};
  }
`;

const Subscribe = () => {
  return (
    <Wrapper>
      <Search placeholder="Email..." enterButton="Submit" />
    </Wrapper>
  );
};

export default Subscribe;
