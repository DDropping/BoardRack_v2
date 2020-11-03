import styled from "styled-components";

export const Container = styled.div`
  margin: 10px 10px 0 10px;
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.md1}) {
    display: none;
  }
`;

export const Header = styled.div`
  font-size: 1.15rem;
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
      borderLeft: `2px solid ${theme.primaryBlue}`,
    }}
  &:hover {
    background-color: ${({ theme, isLogout }) =>
      isLogout ? theme.backgroundRedMenu : theme.backgroundBlueMenu};
    color: ${({ theme, isLogout }) =>
      isLogout ? theme.primaryRed : theme.primaryBlue};
    padding-left: 20px;
  }
`;
