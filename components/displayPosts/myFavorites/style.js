import styled from "styled-components";

export const Container = styled.div`
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

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Li = styled.li`
  display: inline-block;
  vertical-align: top;
`;
