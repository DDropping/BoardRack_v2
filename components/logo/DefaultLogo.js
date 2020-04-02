import React from 'react';
import styled from 'styled-components';

export const ImgWrapper = styled.div`
  padding: 0.5rem;
  width: 200px;
  @media (max-width: ${props => props.theme.md}) {
    display: none;
  }
`;

export const Img = styled.img`
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
