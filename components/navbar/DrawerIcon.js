import React, { useState } from 'react';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';

import DrawerMenu from './DrawerMenu';

export const IconWrapper = styled.div`
  margin: 0.25rem 1rem;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primaryBlue};
  }
  @media (min-width: ${props => props.theme.sm}) {
    display: none;
  }
`;

const DrawerIcon = () => {
  const [isDrawer, toggleDrawer] = useState(false);

  const handleDrawer = value => {
    toggleDrawer(value);
  };

  return (
    <div>
      <IconWrapper
        onClick={() => {
          toggleDrawer(true);
        }}
      >
        <MenuOutlined />
      </IconWrapper>
      <DrawerMenu isDrawer={isDrawer} handleDrawer={handleDrawer} />
    </div>
  );
};

export default DrawerIcon;
