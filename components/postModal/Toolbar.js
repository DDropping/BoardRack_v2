import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from 'antd';
import {
  StarOutlined,
  StarFilled,
  MailOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';

import { addFavorite, removeFavorite } from '../counters/util';
import { Container, ToolbarButton, ToolbarButtonClose } from './stlye';

const Toolbar = ({ postId }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();

  function closeModal() {
    router.push('/');
  }

  return (
    <Container>
      {isAuthenticated && (
        <ToolbarButton onClick={() => addFavorite(postId)}>
          <StarOutlined />
          {' Favorite'}
        </ToolbarButton>
      )}
      {isAuthenticated && (
        <ToolbarButton onClick={() => removeFavorite(postId)}>
          <StarOutlined />
          {' Unfavorite'}
        </ToolbarButton>
      )}
      <ToolbarButton>
        <MailOutlined />
        {' Contact'}
      </ToolbarButton>
      <span style={{ flex: 1 }} />
      <ToolbarButtonClose onClick={() => closeModal()}>
        <CloseCircleOutlined />
        {' Close'}
      </ToolbarButtonClose>
    </Container>
  );
};

export default Toolbar;
