import React from "react";
import { Input } from "antd";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchPosts } from "../../actions/fetchPosts";
import { UPDATE_TEXT_SEARCH, UPDATE_CURRENT_PAGE } from "../../actions/types";

const SearchWrapper = styled.section`
  padding: 0.5rem;
  flex: 1;
`;

const SearchBar = () => {
  const { Search } = Input;
  const router = useRouter();
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => {
    state.filters.textSearch;
  });

  const handleUpdateValue = (value) => {
    dispatch({ type: UPDATE_TEXT_SEARCH, payload: value });
  };

  const handleSearch = () => {
    router.push("/");
    dispatch({ type: UPDATE_CURRENT_PAGE, payload: 1 });
    dispatch(fetchPosts());
  };

  return (
    <SearchWrapper>
      <Search
        enterButton='Search'
        size='large'
        placeholder='Find Your Next Surfboard...'
        value={searchValue}
        onChange={(event) => handleUpdateValue(event.target.value)}
        onSearch={() => handleSearch()}
      />
    </SearchWrapper>
  );
};

export default SearchBar;
