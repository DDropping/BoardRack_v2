import React from 'react';

import { HeaderContainer } from './style';
import ViewCounter from '../counters/Views';
import FavoriteCounter from '../counters/Favorites';

const Header = () => {
  return (
    <HeaderContainer>
      <strong>$price</strong>
      <div style={{ flex: 1 }} />
      <ViewCounter count={12} />
      <FavoriteCounter count={12} postId={123123123} />
    </HeaderContainer>
  );
};

export default Header;
