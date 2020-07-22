import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${({ theme }) => theme.backgroundBlueMenu};
  }
`;

export const A = styled.a`
  padding: 0 0.5rem;
  transition: all 0.2s ease-in-out;
  ${({ active, theme }) =>
    active &&
    `background-color: ${theme.backgroundBlueMenu}; 
  border-right: 2px solid ${theme.primaryBlue}; 
  padding: 1rem;`}
  &:hover {
    background-color: ${({ theme }) => theme.backgroundBlueMenu};
    border-right: 2px solid ${({ theme }) => theme.primaryBlue};
    color: ${({ theme }) => theme.primaryBlue};
    padding-left: 1rem;
  }
`;

export const Logout = styled.div`
  padding: 0 0.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundRedMenu};
    border-right: 2px solid ${({ theme }) => theme.primaryRed};
    color: ${({ theme }) => theme.primaryRed};
    padding-left: 1rem;
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
