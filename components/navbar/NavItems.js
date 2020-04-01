import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import navbarLinks from '../../constants/navbarLinks';

const Ul = styled.ul`
  color: blue;
`;

const Li = styled.li`
  padding: 1rem;
  display: inline-block;
`;

const NavItems = () => {
  return (
    <Ul>
      {navbarLinks.map((navItem, index) => {
        return (
          <Li key={index}>
            <Link href={navItem.href}>{navItem.title}</Link>
          </Li>
        );
      })}
    </Ul>
  );
};

export default NavItems;
