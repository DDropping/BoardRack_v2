import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 10px 0;
  padding: 5px;
  min-height: 100%;
  min-width: 300px;
  width: 400px;
  background-color: ${({ theme }) => theme.primaryWhite};
  border: 1px solid ${({ theme }) => theme.backgroundGreyMenu};
  transition: ${({ theme }) => theme.boxShadow};
  &:hover {
    box-shadow: 0 0 11px rgba(83, 68, 68, 0.2);
  }
`;

export const HeaderContainer = styled.div`
  font-size: 20px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
`;

export const ContentContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.backgroundGreyMenu};
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
