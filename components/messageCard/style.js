import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 10px 0;
  padding: 5px;
  min-height: 100%;
  width: 400px;
  border: 1px solid ${({ theme }) => theme.primaryGrey};
`;

export const HeaderContainer = styled.div`
  font-size: 20px;
  padding-bottom: 5px;
`;

export const ContentContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.primaryGrey};
  padding: 5px 10px 10px 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  font-weight: bold;
`;

export const MessageBodyWrapper = styled.div`
  overflow: hidden;
  white-space: pre-line;
  word-wrap: break-word;

  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const FooterContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.primaryDarkGrey};
`;

export const TimeStampWrapper = styled.div`
  font-style: italic;
`;
