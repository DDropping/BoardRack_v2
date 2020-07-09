import styled from "styled-components";

export const PostPageContainer = styled.div`
  height: calc(100% - 60px);
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
`;

export const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
