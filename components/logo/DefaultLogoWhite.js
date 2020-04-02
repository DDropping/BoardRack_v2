import React from 'react';
import styled from 'styled-components';

export const ImgWrapper = styled.div`
  padding: 0.5rem;
  max-width: 300px;
  margin: 0 auto;
`;

export const Img = styled.img`
  width: 100%;
`;

const DefaultLogoWhite = () => {
  return (
    <ImgWrapper>
      <Img src="/images/br_logo_white.png" alt="boardrack logo" />
    </ImgWrapper>
  );
};

export default DefaultLogoWhite;
