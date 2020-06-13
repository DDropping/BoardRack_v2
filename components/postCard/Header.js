import React from 'react';

import { HeaderContainer } from './style';
import ViewCounter from '../counters/Views';

const Header = () => {
  return (
    <HeaderContainer>
      <strong>$price</strong>
      <ViewCounter viewCount={12} />
    </HeaderContainer>
  );
};

export default Header;
