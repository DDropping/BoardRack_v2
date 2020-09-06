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

export const Ul = styled.ul`
  margin-bottom: 0;
  padding-bottom: 10px;
  overflow: auto;
  ${(props) => props.preview}
  white-space: ${(props) => (props.preview ? "nowrap" : "normal")};
`;

export const Li = styled.li`
  display: inline-block;
  vertical-align: top;
`;
