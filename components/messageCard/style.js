import styled from "styled-components";

export const A = styled.a`
  font-size: 20px;
`;

export const Title = styled.p`
  font-weight: bold;
`;

export const Body = styled.p`
  overflow: hidden;
  white-space: pre-line;
  word-wrap: break-word;

  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const TimeStamp = styled.div`
  font-style: italic;
  color: ${({ theme }) => theme.primaryDarkGrey};
`;
