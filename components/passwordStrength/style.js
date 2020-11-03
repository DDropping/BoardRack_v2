import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StrengthBox = styled.div`
  margin: auto 1px;
  height: 6px;
  width: 30px;
  border: 1px solid ${({ theme }) => theme.primaryLightGrey};
  background-color: ${({ color, isActive }) => isActive && color};
`;

export const TextContainer = styled.div`
  margin-right: 10px;
  color: ${({ theme }) => theme.primaryLightGrey};
`;
