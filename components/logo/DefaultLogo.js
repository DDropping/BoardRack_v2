import React from 'react';
import styled from 'styled-components';

export const ImgWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  flex: none;
  width: 200px;
  position: relative;
  color: inherit;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const DefaultLogo = () => {
  return (
    <ImgWrapper>
      <Img src="/images/br_logo_origional.png" alt="boardrack logo" />
    </ImgWrapper>
  );
};

export default DefaultLogo;
