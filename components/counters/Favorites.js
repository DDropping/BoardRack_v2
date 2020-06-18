import React, { useState, useEffect } from 'react';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from 'antd';
import styled from 'styled-components';

const Favorites = ({ favorites, postId }) => {
  const user = useSelector((state) => state.auth.user);
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    //check if user has favorited post
    if (user) {
      setFavorite(user.favorites.includes(postId));
    }
  }, [user]);

  const FavoritesContainer = styled.div`
    display: inline-block;
    position: relative;
    margin-right: 2px;
    font-size: 18px;
    color: ${({ theme }) => theme.primaryBlue};
  `;

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
            setFavorite(false);
          }}
        />
      )}
      {user && !isFavorite && (
        <StarOutlined
          onClick={(e) => {
            setFavorite(true);
          }}
        />
      )}
    </FavoritesContainer>
  );
};

export default Favorites;
