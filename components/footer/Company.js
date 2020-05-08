import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import companyLinks from '../../constants/aboutLinks';

const Li = styled.li`
  display: block;
  a {
    color: ${({ theme }) => theme.primaryLightGrey};
    &:hover {
      color: ${({ theme }) => theme.primaryWhite};
    }
  }
`;

const Company = () => {
  return (
    <ul>
      {companyLinks.map((companyLink, index) => {
        return (
          <Li key={index}>
            <Link href={companyLink.href}>
              <a>{companyLink.title}</a>
            </Link>
          </Li>
        );
      })}
    </ul>
  );
};

export default Company;
