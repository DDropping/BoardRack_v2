import React from 'react';
import styled from 'styled-components';

import Navbar from '../navbar';

const NavBarWrapper = styled.section`
  z-index: 10;
`;

const Body = styled.section`
  z-index: -10;
`;

function Layout({ children }) {
  return (
    <>
      <NavBarWrapper>
        <Navbar />
        <Body>{children}</Body>
      </NavBarWrapper>
    </>
  );
}

export default Layout;
