import React from 'react';
import Link from 'next/link';
import { Drawer } from 'antd';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import navDrawerLinks from '../../constants/navDrawerLinks';

const Img = styled.img`
  width: 80%;
  padding: 1rem 0 1rem 1rem;
  cursor: pointer;
`;

const Li = styled.li`
  display: block;
  font-size: 1rem;
  padding: 1rem 1rem 1rem 0;
  margin-left: 1rem;
  margin-bottom: 0.25rem;
  ${({ active, theme }) =>
    active &&
    `background-color: ${theme.backgroundBlueMenu}; 
    border-left: 2px solid ${theme.primaryBlue}; 
    padding: 1rem;`}
  &:hover {
    background-color: ${({ theme }) => theme.backgroundBlueMenu};
    border-left: 2px solid ${({ theme }) => theme.primaryBlue};
    padding: 1rem;
  }
`;

const isAuthenticated = false;
const navItems = navDrawerLinks.filter(
  navitem => navitem.protected === isAuthenticated
);

const DrawerMenu = ({ isDrawer, handleDrawer }) => {
  const router = useRouter();

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Drawer
      placement="right"
      closable
      onClose={() => handleDrawer(false)}
      visible={isDrawer}
      bodyStyle={{ padding: 0 }}
    >
      <Link href="/">
        <Img
          src="/images/br_logo_black.png"
          alt="boardrack logo"
          onClick={() => handleDrawer(false)}
        />
      </Link>
      <ul>
        {navItems.map((navItem, index) => {
          return (
            <Link href={navItem.href} key={index}>
              <Li
                active={isActive(navItem.href)}
                onClick={() => handleDrawer(false)}
              >
                <a>
                  {navItem.icon} {navItem.title}
                </a>
              </Li>
            </Link>
          );
        })}
      </ul>
    </Drawer>
  );
};

export default DrawerMenu;
