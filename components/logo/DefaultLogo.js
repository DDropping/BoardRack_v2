import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export const ImgWrapper = styled.div`
  padding: 0.5rem;
  max-width: 200px;
  max-height: 60px;
  cursor: pointer;
  @media (max-width: ${props => props.theme.md}) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

const DefaultLogo = () => {
  return (
    <Link href="/">
      <ImgWrapper>
        <Img src="/images/br_logo_black.png" alt="boardrack logo" />
      </ImgWrapper>
    </Link>
  );
};

export default DefaultLogo;
