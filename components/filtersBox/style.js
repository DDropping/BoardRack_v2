import styled from "styled-components";

export const FiltersBoxContainer = styled.div`
  position: relative;
  padding: 10px;
  margin-top: 10px;
  margin-right: 10px;
  width: 325px;
  background-color: ${({ theme }) => theme.primaryWhite};
  box-shadow: 0 0 11px rgba(83, 68, 68, 0.2);
  @media (max-width: ${({ theme }) => theme.sm}) {
    width: 100%;
    margin-right: 0;
  }
`;

export const LocationTextWrapper = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const InputRangeContainer = styled.div`
  .ant-input-number-disabled .ant-input-number-input {
    cursor: pointer;
  }
`;

export const WarningMessage = styled.div`
  color: ${({ theme }) => theme.primaryOrange};
  font-style: italic;
`;
