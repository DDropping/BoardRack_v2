import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  @media (max-width: ${({ theme }) => theme.md}) {
    display: none;
  }
`;

export const Ul = styled.ul`
  list-style-type: none;
`;

export const Li = styled.li`
  cursor: pointer;
  padding: 10px;
  margin-bottom: 1px;
  transition: ${({ theme }) => theme.easeInOut};
  ${({ active, theme }) =>
    active && {
      backgroundColor: theme.backgroundBlueMenu,
      borderRight: `2px solid ${theme.primaryBlue}`,
    }}
  &:hover {
    background-color: ${({ theme, isLogout }) =>
      isLogout ? theme.backgroundRedMenu : theme.backgroundBlueMenu};
    color: ${({ theme, isLogout }) =>
      isLogout ? theme.primaryRed : theme.primaryBlue};
    padding-left: 20px;
  }
`;

export const Username = styled.div`
  margin-left: 10px;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Location = styled.div`
  margin-left: 10px;
  font-size: 1.1rem;
`;
