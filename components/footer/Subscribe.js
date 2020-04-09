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
`;

const Subscribe = () => {
  return (
    <Wrapper>
      <Search
        placeholder="input search loading with enterButton"
        enterButton="Submit"
      />
    </Wrapper>
  );
};

export default Subscribe;
