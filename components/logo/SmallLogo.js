import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export const ImgWrapper = styled.div`
  padding: 0.5rem;
  max-width: 60px;
  max-height: 60px;
  cursor: pointer;
  @media (min-width: ${(props) => props.theme.md}) {
    display: none;
  }
`;

const SmallLogo = () => {
  return (
    <Link href='/'>
      <ImgWrapper>
        <Image
          src='/images/br_logo_small.png'
          alt='boardrack'
          width={50}
          height={45}
        />
      </ImgWrapper>
    </Link>
  );
};

export default SmallLogo;
