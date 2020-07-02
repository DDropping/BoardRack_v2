import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  flex: 1;
  li {
    list-style-type: none;
    a {
      :hover {
        color: ${({ theme }) => theme.primaryBlack};
      }
    }
  }
`;
