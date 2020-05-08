import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export const ImgWrapper = styled.div`
  padding: 0.5rem;
  max-width: 60px;
  max-height: 60px;
  cursor: pointer;
  @media (min-width: ${props => props.theme.md}) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

const SmallLogo = () => {
  return (
    <Link href="/">
      <ImgWrapper>
        <Img src="/images/br_logo_small.png" alt="boardrack logo" />
      </ImgWrapper>
    </Link>
  );
};

export default SmallLogo;
