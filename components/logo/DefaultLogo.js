import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export const ImgWrapper = styled.div`
  padding: 0.5rem;
  max-width: 200px;
  max-height: 60px;
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.md}) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

const DefaultLogo = () => {
  return (
    <Link href='/'>
      <ImgWrapper>
        <Image
          src='/images/br_logo_black.png'
          alt='boardrack'
          width={256}
          height={56}
        />
      </ImgWrapper>
    </Link>
  );
};

export default DefaultLogo;
