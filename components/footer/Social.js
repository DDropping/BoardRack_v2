import React from 'react';
import styled from 'styled-components';

import socialLinks from '../../constants/socialLinks';

const LiSocial = styled.li`
  display: inline-block;
  margin: 0.75rem;
  a {
    color: ${({ theme }) => theme.primaryLightGrey};
    font-size: 2rem;
    &:hover {
      color: ${({ theme }) => theme.primaryWhite};
    }
  }
`;

const Social = () => {
  return (
    <ul>
      {socialLinks.map((socialLink, index) => {
        return (
          <LiSocial key={index}>
            <a href={socialLink.href}>{socialLink.icon}</a>
          </LiSocial>
        );
      })}
    </ul>
  );
};

export default Social;
