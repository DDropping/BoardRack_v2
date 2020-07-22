import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  min-height: 500px;
  border-right: 1px solid ${({ theme }) => theme.primaryGrey};
`;
