import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${({ theme }) => theme.backgroundBlueMenu};
  }
`;

export const A = styled.a`
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    color: ${({ theme }) => theme.primaryBlack};
  }
  padding: 0 0.5rem;
  transition: ${({ theme }) => theme.easeInOut};
  ${({ active, theme }) =>
    active &&
    `background-color: ${theme.backgroundBlueMenu}; 
  padding: 1rem;`}
  &:hover {
    background-color: ${({ theme }) => theme.backgroundBlueMenu};
    padding-left: 1rem;
  }
`;

export const Logout = styled.div`
  padding: 0 0.5rem;
  transition: ${({ theme }) => theme.easeInOut};
  &:hover {
    background-color: ${({ theme }) => theme.backgroundRedMenu};
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
