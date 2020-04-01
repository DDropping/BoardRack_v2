import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import navbarLinks from '../../constants/navbarLinks';

const Ul = styled.ul`
  position: absolute;
  right: 0%;
  color: blue;
  display: inline-block;
  vertical-align: top;
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
