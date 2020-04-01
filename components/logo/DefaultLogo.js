import React from 'react';
import styled from 'styled-components';

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export const ImgWrapper = styled.div`
  display: inline-block;
  flex: none;
  width: 200px;
  position: relative;
  color: inherit;
`;

const DefaultLogo = () => {
  return (
    <ImgWrapper>
      <Img src="/images/br_logo_origional.png" alt="boardrack logo" />
    </ImgWrapper>
  );
};

export default DefaultLogo;
