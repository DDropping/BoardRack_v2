import React, { useState, useEffect } from 'react';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from 'antd';
import styled from 'styled-components';
import axios from 'axios';

const FavoritesContainer = styled.div`
  display: inline-block;
  position: relative;
  margin-right: 2px;
  font-size: 18px;
  color: ${({ theme }) => theme.primaryBlue};
`;

const Favorites = ({ favorites, postId }) => {
  const user = useSelector((state) => state.auth.user);
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    //check if user has favorited post
    if (user) {
      setFavorite(user.favorites.includes(postId));
    }
  }, [user]);

  async function addFavorite(postId) {
    //set headers for request
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    //stringify the form items
    const data = { postId: postId };
    const body = JSON.stringify(data);

    //update post to DB
    try {
      await axios.put('/api/posts/favorite', body, config);
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  }

  async function removeFavorite(postId) {
    //set headers for request
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    //stringify the form items
    const data = { postId: postId };
    const body = JSON.stringify(data);

    //update post to DB
    try {
      await axios.put('/api/posts/unfavorite', body, config);
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  }

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
            removeFavorite(postId);
            setFavorite(false);
          }}
        />
      )}
      {user && !isFavorite && (
        <StarOutlined
          onClick={(e) => {
            addFavorite(postId);
            setFavorite(true);
          }}
        />
      )}
    </FavoritesContainer>
  );
};

export default Favorites;
