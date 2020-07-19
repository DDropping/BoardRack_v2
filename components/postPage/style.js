import styled from "styled-components";

export const PostPageContainer = styled.div`
  height: calc(100% - 60px);
  max-width: 1200px;
  margin: 0 auto;
`;

export const ImagesContainer = styled.div`
  display: inline-block;
  width: 50%;
  height: 100%;
  margin-top: 10px;
  padding: 0px 5px 0px 10px;
  overflow-y: auto;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  @media (max-width: ${({ theme }) => theme.md}) {
    display: none;
  }
`;

export const DataContainer = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 50%;
  height: 100%;
  margin-top: 10px;
  padding: 0px 10px 0px 5px;
  overflow-y: auto;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  @media (max-width: ${({ theme }) => theme.md}) {
    width: 100%;
  }
`;

export const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
