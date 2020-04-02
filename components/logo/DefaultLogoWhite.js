import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export const ImgWrapper = styled.div`
  padding: 0.5rem;
  max-width: 300px;
  margin: 0 auto;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
`;

const DefaultLogoWhite = () => {
  return (
    <Link href="/">
      <ImgWrapper>
        <Img src="/images/br_logo_white.png" alt="boardrack logo" />
      </ImgWrapper>
    </Link>
  );
};

export default DefaultLogoWhite;
