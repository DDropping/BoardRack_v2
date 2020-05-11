import styled from "styled-components";

export const FiltersBarContainer = styled.div`
  display: flex;
  width: 100vw;
  background-color: ${({ theme }) => theme.primaryWhite};
  border-bottom: 1px solid ${({ theme }) => theme.primaryGrey};
  border-top: 1px solid ${({ theme }) => theme.primaryGrey};
`;
