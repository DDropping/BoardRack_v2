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
  }, []);

  return (
    <FavoritesContainer>
      {favorites.length}
      {
        /* if user is not logged in */
        !user && (
          <Tooltip placement='top' title='Login to favorite'>
            <StarOutlined />
          </Tooltip>
        )
      }
      {
        /* if user is the author of post */
        user && user.posts.filter((post) => post._id === postId).length > 0 && (
          <Tooltip placement='top' title='Cannot Favorite Your Own Posts'>
            <StarOutlined />
          </Tooltip>
        )
      }
      {
        /* if user is not post author && post is not favorited*/
        user &&
          !user.posts.filter((post) => post._id === postId).length > 0 &&
          isFavorite && (
            <StarFilled
              onClick={() => {
                dispatch(removeFavorite(postId));
                setFavorite(false);
              }}
            />
          )
      }
      {
        /* if user is not post author && post is favorited*/
        user &&
          !user.posts.filter((post) => post._id === postId).length > 0 &&
          !isFavorite && (
            <StarOutlined
              onClick={() => {
                dispatch(addFavorite(postId));
                setFavorite(true);
              }}
            />
          )
      }
    </FavoritesContainer>
  );
};

export default Favorites;
