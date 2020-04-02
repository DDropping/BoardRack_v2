import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  padding: 0.5rem;
  flex: 1;
`;

const SearchBar = () => {
  const { Search } = Input;

  return (
    <SearchWrapper>
      <Search
        enterButton="Search"
        size="large"
        placeholder="Find Your Next Surfboard..."
        onSearch={value => console.log(value)}
      />
    </SearchWrapper>
  );
};

export default SearchBar;
