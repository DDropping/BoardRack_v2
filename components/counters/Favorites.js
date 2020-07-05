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
      setFavorite(user.favorites.includes(postId));
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
      {user && isFavorite && (
        <StarFilled
          onClick={(e) => {
            dispatch(removeFavorite(postId));
            setFavorite(false);
          }}
        />
      )}
      {user && !isFavorite && (
        <StarOutlined
          onClick={(e) => {
            dispatch(addFavorite(postId));
            setFavorite(true);
          }}
        />
      )}
    </FavoritesContainer>
  );
};

export default Favorites;
