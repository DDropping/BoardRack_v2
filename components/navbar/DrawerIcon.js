import React from 'react';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';

export const IconWrapper = styled.div`
  font-size: 2rem;
  padding: 0.25rem 1.25rem 0.25rem 1rem;
  cursor: pointer;
  @media (min-width: ${props => props.theme.sm}) {
    display: none;
  }
`;

const DrawerIcon = () => {
  return (
    <IconWrapper>
      <MenuOutlined />
    </IconWrapper>
  );
};

export default DrawerIcon;
