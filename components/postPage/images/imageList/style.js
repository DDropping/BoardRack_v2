import styled from "styled-components";

export const ImageContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.md}) {
    display: none;
  }
`;
