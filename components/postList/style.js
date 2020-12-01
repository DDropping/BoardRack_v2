import styled from "styled-components";

export const Container = styled.div`
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  margin: 0 10px 10px 10px;
  display: flex;
  transition: ${({ theme }) => theme.boxShadow};
  box-shadow: 0 0 11px rgba(83, 68, 68, 0.2);
  cursor: pointer;
  :hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.4);
  }
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Dimensions = styled.div`
  align-self: center;
  margin-left: 10px;
  color: ${({ theme }) => theme.primaryDarkGrey};
  @media (max-width: ${(props) => props.theme.lg}) {
    display: none;
  }
`;

export const Counters = styled.div`
  align-self: center;
  margin-left: 10px;
`;
