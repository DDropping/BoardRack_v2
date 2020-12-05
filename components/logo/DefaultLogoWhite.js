import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export const ImgWrapper = styled.div`
  padding: 0.5rem;
  max-width: 300px;
  margin: 0 auto;
  cursor: pointer;
`;

const DefaultLogoWhite = () => {
  return (
    <Link href='/'>
      <ImgWrapper>
        <Image
          src='/images/br_logo_white.png'
          alt='boardrack'
          layout='responsive'
          width={256}
          height={56}
        />
      </ImgWrapper>
    </Link>
  );
};

export default DefaultLogoWhite;
