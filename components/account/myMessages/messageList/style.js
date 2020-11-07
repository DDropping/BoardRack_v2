import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid ${({ theme }) => theme.primaryGrey};
  border-bottom: 1px solid ${({ theme }) => theme.primaryGrey};
  border-left: 1px solid ${({ theme }) => theme.primaryGrey};
  cursor: pointer;
  transition: ${({ theme }) => theme.easeInOut};
  background: ${(props) => props.active && props.theme.backgroundBlueMenu};

  border-right: ${(props) =>
    props.active && "3px solid " + props.theme.primaryBlue};
  &:hover {
    background: ${({ theme }) => theme.backgroundBlueMenu};
    padding-left: 1rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Username = styled.div`
  font-weight: bold;
`;

export const TimeAgo = styled.div`
  font-style: italic;
  color: ${({ theme }) => theme.primaryDarkGrey};
`;

export const Description = styled.div`
  font-style: italic;
  color: ${({ theme }) => theme.primaryDarkGrey};
  display: flex;
  justify-content: space-between;
`;
