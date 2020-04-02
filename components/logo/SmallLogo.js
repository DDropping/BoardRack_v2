import React from 'react';
import styled from 'styled-components';

export const ImgWrapper = styled.div`
  padding: 0.5rem;
  max-width: 60px;
  max-height: 60px;
  @media (min-width: ${props => props.theme.md}) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

const SmallLogo = () => {
  return (
    <ImgWrapper>
      <Img src="/images/br_logo_small.png" alt="boardrack logo" />
    </ImgWrapper>
  );
};

export default SmallLogo;
