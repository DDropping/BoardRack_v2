import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  margin: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 300px;
  border-radius: 50%;
  background: ${({ theme }) => theme.secondaryBlue};
`;

const Text = styled.div`
  font-size: 1.75rem;
  text-align: center;
`;

const NoPostsFound = () => {
  const searchTerm = useSelector((state) => state.filters.previousTextSearch);

  return (
    <Container>
      <ImageWrapper>
        <Image
          src='/images/br_sad_shark.png'
          alt='No results found'
          layout='responsive'
          width={882}
          height={923}
        />
      </ImageWrapper>
      <Text>No results were found</Text>
      {searchTerm && <Text>{` matching "${searchTerm}"`}</Text>}
    </Container>
  );
};

export default NoPostsFound;
