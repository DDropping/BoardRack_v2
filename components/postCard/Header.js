import React from 'react';

import { HeaderContainer } from './style';
import ViewCounter from '../counters/Views';
import FavoriteCounter from '../counters/Favorites';

const Header = ({ data }) => {
  console.log(data);
  return (
    <HeaderContainer>
      <strong>{'$' + data.price}</strong>
      <div style={{ flex: 1 }} />
      <ViewCounter count={data.viewCount} />
      <FavoriteCounter favorites={data.favorites} postId={data.postId} />
    </HeaderContainer>
  );
};

export default Header;
