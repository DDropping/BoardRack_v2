import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import navbarLinks from '../../constants/navbarLinks';

const Ul = styled.ul`
  color: blue;
  display: inline-block;
  vertical-align: top;
  @media (max-width: ${props => props.theme.sm}) {
    display: none;
  }
`;

const Li = styled.li`
  padding: 1rem;
  display: inline-block;
`;

const isAuthenticated = false;
const navItems = navbarLinks.filter(
  navItem => navItem.protected === isAuthenticated
);

const NavItems = () => {
  return (
    <Ul>
      {navItems.map((navItem, index) => {
        return (
          <Li key={index}>
            <Link href={navItem.href}>
              <a>{navItem.title}</a>
            </Link>
          </Li>
        );
      })}
    </Ul>
  );
};

export default NavItems;
