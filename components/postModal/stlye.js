import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  z-index: 1;
  max-width: 100%;
  height: 50px;
  line-height: 50px; /* vertically align text */
  background-color: ${({ theme }) => theme.primaryBlue};
  box-shadow: 0 3px 0.125rem 0 rgba(0, 0, 0, 0.075);
  position: -webkit-sticky;
  position: sticky;
  font-size: 16px;
`;

export const ToolbarButton = styled.button`
  display: inline-block;
  padding: 0px 20px;
  border: none;
  border-right: 2px solid white;
  height: 50px;
  color: ${({ theme }) => theme.primaryWhite};
  background-color: ${({ theme }) => theme.primaryBlue};
  &:hover {
    background-color: ${({ theme }) => theme.secondaryBlue};
  }
  &:focus {
    outline: none;
  }
`;
export const ToolbarButtonClose = styled.button`
  display: inline-block;
  padding: 0px 20px;
  border: 0;
  border-left: 2px solid white;
  height: 50px;
  color: ${({ theme }) => theme.primaryWhite};
  background-color: ${({ theme }) => theme.primaryBlue};
  &:hover {
    background-color: ${({ theme }) => theme.secondaryBlue};
  }
  &:focus {
    outline: none;
  }
`;
