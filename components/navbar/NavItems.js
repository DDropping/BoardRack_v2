import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  padding: 1rem 0.5rem 0.25rem 0.5rem;
  margin: 0 0.1rem;
  display: inline-block;
  cursor: pointer;
  ${({ active, theme }) =>
    active && `border-bottom: 2px solid ${theme.primaryBlue};`}
  &:hover {
    background-color: ${({ theme }) => theme.backgroundBlueMenu};
    border-bottom: 2px solid ${({ theme }) => theme.primaryBlue};
  }
`;

const isAuthenticated = false;
const navItems = navbarLinks.filter(
  navItem => navItem.protected === isAuthenticated
);

const NavItems = () => {
  const router = useRouter();

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Ul>
      {navItems.map((navItem, index) => {
        return (
          <Link href={navItem.href} key={index}>
            <Li active={isActive(navItem.href)}>
              <a>{navItem.title}</a>
            </Li>
          </Link>
        );
      })}
    </Ul>
  );
};

export default NavItems;
