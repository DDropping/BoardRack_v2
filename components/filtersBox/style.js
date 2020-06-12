import styled from 'styled-components';

export const FiltersBoxContainer = styled.div`
  position: relative;
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  width: 18rem;
  background-color: ${({ theme }) => theme.primaryWhite};
  box-shadow: 0 0 11px rgba(83, 68, 68, 0.2);
  @media (max-width: ${({ theme }) => theme.sm}) {
    width: 100%;
  }
`;

export const LocationTextWrapper = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PriceRangeContainer = styled.div`
  .ant-input-number-disabled .ant-input-number-input {
    cursor: pointer;
  }
`;
