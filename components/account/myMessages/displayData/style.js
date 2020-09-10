import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 10px;
  overflow: auto;
  ${(props) => props.preview}
  white-space: ${(props) => (props.preview ? "nowrap" : "normal")};
`;
