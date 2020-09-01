import React, { useState, useEffect } from "react";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "antd";
import styled from "styled-components";

import { addFavorite, removeFavorite } from "../../actions/counters";

const FavoritesContainer = styled.div`
  display: inline-block;
  position: relative;
  margin-right: 2px;
  font-size: 18px;
  color: ${({ theme }) => theme.primaryBlue};
`;

const Favorites = ({ favorites, postId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    //check if user has favorited post
    if (user) {
      setFavorite(
        user.favorites.filter((post) => post._id === postId).length > 0
          ? true
          : false
      );
    }
  }, [user]);

  return (
    <FavoritesContainer>
      {favorites.length}
      {!user && (
        <Tooltip placement="top" title="Login to favorite">
          <StarOutlined />
        </Tooltip>
      )}
      {user && user.posts.includes(postId) && (
        <Tooltip placement="top" title="Cannot Favorite Your Own Posts">
          <StarOutlined />
        </Tooltip>
      )}
      {user && !user.posts.includes(postId) && isFavorite && (
        <StarFilled
          onClick={() => {
            dispatch(removeFavorite(postId));
            setFavorite(false);
          }}
        />
      )}
      {user && !user.posts.includes(postId) && !isFavorite && (
        <StarOutlined
          onClick={() => {
            dispatch(addFavorite(postId));
            setFavorite(true);
          }}
        />
      )}
    </FavoritesContainer>
  );
};

export default Favorites;
