import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import policyLinks from '../../constants/policyLinks';

const Title = styled.div`
  font-size: 1.25rem;
`;

const Li = styled.li`
  display: block;
  a {
    color: #bbb;
    &:hover {
      color: #fff;
    }
  }
`;

const Policy = () => {
  return (
    <ul>
      {policyLinks.map((policyLink, index) => {
        return (
          <Li key={index}>
            <Link href={policyLink.href}>
              <a>{policyLink.title}</a>
            </Link>
          </Li>
        );
      })}
    </ul>
  );
};

export default Policy;
