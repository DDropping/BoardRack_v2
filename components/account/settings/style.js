import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  padding: 0.25rem 3rem;
  margin: 0 2rem;
  border-radius: 5px;

  ${({ theme, isNotSaved, isError }) =>
    isNotSaved && {
      background: isError ? theme.primaryLightRed : theme.primaryLightGreen,
      border: isError
        ? `1px solid ${theme.primaryRed}`
        : `1px solid ${theme.primaryGreen}`,
    }};
`;

export const ButtonText = styled.div`
  padding: 0 1rem;
  text-align: right;
  font-style: italic;
  color: ${({ theme }) => theme.primaryDarkGrey};
  line-height: 2rem;
  @media (max-width: ${({ theme }) => theme.sm}) {
    display: none;
  }
`;

export const Title = styled.h2``;

export const Text = styled.span`
  font-style: italic;
  color: ${({ theme }) => theme.primaryDarkGrey};
  padding-right: 0.25rem;
`;
